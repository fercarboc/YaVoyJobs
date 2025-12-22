/// <reference types="https://deno.land/x/types/index.d.ts" />
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.8';
import Stripe from 'https://esm.sh/stripe@11.1.0?target=deno';

const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const allowedOrigins = (Deno.env.get('ALLOWED_ORIGINS') || '')
  .split(',')
  .map((o) => o.trim())
  .filter((o) => o.length > 0);
const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY') || '';

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('create-payment-intent: missing Supabase env');
}

if (!stripeSecretKey) {
  console.error('create-payment-intent: missing STRIPE_SECRET_KEY');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
});

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const buildCorsHeaders = (origin: string | null) => {
  const isAllowed = origin && allowedOrigins.includes(origin);
  if (!isAllowed) return null;
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
  };
};

const authErrorResponse = (status: number, message: string, corsHeaders?: Record<string, string>) =>
  new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...(corsHeaders ?? {}),
    },
  });

serve(async (req) => {
  if (!supabaseUrl || !supabaseServiceKey || !stripeSecretKey) {
    return new Response(JSON.stringify({ error: 'Server not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const origin = req.headers.get('origin');
  const corsHeaders = buildCorsHeaders(origin);

  if (req.method === 'OPTIONS') {
    return corsHeaders
      ? new Response('ok', { headers: corsHeaders })
      : authErrorResponse(403, 'Origin not allowed');
  }

  if (!corsHeaders) {
    return authErrorResponse(403, 'Origin not allowed');
  }

  const authHeader = req.headers.get('authorization');
  const jwt = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!jwt) {
    return authErrorResponse(401, 'Missing bearer token', corsHeaders);
  }

  const { data: userResult, error: userError } = await supabaseAdmin.auth.getUser(jwt);
  if (userError || !userResult?.user) {
    return authErrorResponse(401, 'Invalid token', corsHeaders);
  }

  try {
    const { payment_id } = await req.json();

    if (!payment_id) {
      throw new Error('payment_id is required');
    }

    const { data: payment, error: paymentFetchError } = await supabaseAdmin
      .from('VoyPayments')
      .select('id, amount_cents, amount, user_id, employer_id, status, stripe_payment_intent_id')
      .eq('id', payment_id)
      .single();

    if (paymentFetchError || !payment) {
      throw new Error('Payment not found');
    }

    const isOwner =
      payment.user_id === userResult.user.id ||
      payment.employer_id === userResult.user.id;
    if (!isOwner) {
      return authErrorResponse(403, 'Not allowed to pay this record', corsHeaders);
    }

    if (payment.status && payment.status !== 'pending') {
      throw new Error('Payment not pending');
    }

    if (payment.stripe_payment_intent_id) {
      return new Response(
        JSON.stringify({ clientSecret: null, paymentIntentId: payment.stripe_payment_intent_id }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      );
    }

    const amountCents =
      typeof payment.amount_cents === 'number'
        ? payment.amount_cents
        : Math.round((payment.amount ?? 0) * 100);

    if (!amountCents || amountCents <= 0) {
      throw new Error('Invalid amount');
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency: 'eur',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        payment_id,
        payment_type: 'commission',
        user_id: userResult.user.id,
      },
    });

    const updateResponse = await fetch(`${supabaseUrl}/rest/v1/VoyPayments?id=eq.${payment_id}`, {
      method: 'PATCH',
      headers: {
        apikey: supabaseServiceKey,
        Authorization: `Bearer ${supabaseServiceKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        stripe_payment_intent_id: paymentIntent.id,
      }),
    });

    if (!updateResponse.ok) {
      const text = await updateResponse.text();
      throw new Error(`Failed to save payment intent: ${text}`);
    }

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    );
  }
});
