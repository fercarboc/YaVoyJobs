/// <reference types="https://deno.land/x/types/index.d.ts" />
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.8';
import Stripe from 'https://esm.sh/stripe@11.1.0?target=deno';

const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET') || '';

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
});

const jsonResponse = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

serve(async (req) => {
  if (!endpointSecret) {
    console.error('stripe-webhook: missing STRIPE_WEBHOOK_SECRET');
    return jsonResponse(500, { error: 'Webhook secret not configured' });
  }

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('stripe-webhook: missing Supabase env');
    return jsonResponse(500, { error: 'Supabase env not configured' });
  }

  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return jsonResponse(400, { error: 'No signature' });
  }

  const body = await req.text();

  try {
    const event = stripe.webhooks.constructEvent(body, signature, endpointSecret);

    if (event.type !== 'payment_intent.succeeded') {
      console.log('stripe-webhook: ignoring event', event.type);
      return jsonResponse(200, { received: true });
    }

    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    const metadata = paymentIntent.metadata || {};

    console.log('stripe-webhook: payment_intent.succeeded', paymentIntent.id);

    if (metadata.payment_type === 'subscription' && metadata.subscription_id) {
      const subscriptionId = metadata.subscription_id;

      const { data: subscription, error: subscriptionError } = await supabase
        .from('VoyCompanySubscriptions')
        .select('id, status, stripe_payment_intent_id')
        .eq('id', subscriptionId)
        .single();

      if (subscriptionError || !subscription) {
        console.error('stripe-webhook: subscription not found', subscriptionError);
        return jsonResponse(200, { received: true });
      }

      if (subscription.status === 'active') {
        return jsonResponse(200, { received: true });
      }

      if (
        subscription.stripe_payment_intent_id &&
        subscription.stripe_payment_intent_id !== paymentIntent.id
      ) {
        console.error('stripe-webhook: subscription intent mismatch');
        return jsonResponse(400, { error: 'PaymentIntent mismatch' });
      }

      const amount = paymentIntent.amount / 100;
      const type = (metadata.subscription_type || '').toLowerCase();
      const planDuration = {
        monthly: 30,
        semester: 180,
        annual: 365,
      } as Record<string, number>;
      const durationDays =
        planDuration[type] ||
        (amount >= 120 ? 365 : amount >= 75 ? 180 : 30);

      const startDate = new Date();
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + durationDays);

      const { error: updateError } = await supabase
        .from('VoyCompanySubscriptions')
        .update({
          status: 'active',
          start_date: startDate.toISOString(),
          end_date: endDate.toISOString(),
          stripe_payment_intent_id: paymentIntent.id,
        })
        .eq('id', subscriptionId);

      if (updateError) {
        console.error('stripe-webhook: failed to update subscription', updateError);
        return jsonResponse(400, { error: 'Failed to update subscription' });
      }

      return jsonResponse(200, { received: true });
    }

    if (metadata.payment_id) {
      const paymentId = metadata.payment_id;

      const { data: payment, error: paymentError } = await supabase
        .from('VoyPayments')
        .select('id, status, stripe_payment_intent_id')
        .eq('id', paymentId)
        .single();

      if (paymentError || !payment) {
        console.error('stripe-webhook: payment not found', paymentError);
        return jsonResponse(200, { received: true });
      }

      if (payment.status === 'completed') {
        return jsonResponse(200, { received: true });
      }

      if (
        payment.stripe_payment_intent_id &&
        payment.stripe_payment_intent_id !== paymentIntent.id
      ) {
        console.error('stripe-webhook: payment intent mismatch');
        return jsonResponse(400, { error: 'PaymentIntent mismatch' });
      }

      const { error: updateError } = await supabase
        .from('VoyPayments')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString(),
          stripe_payment_intent_id: paymentIntent.id,
        })
        .eq('id', paymentId);

      if (updateError) {
        console.error('stripe-webhook: failed to update payment', updateError);
        return jsonResponse(400, { error: 'Failed to update payment' });
      }

      return jsonResponse(200, { received: true });
    }

    console.warn('stripe-webhook: missing metadata identifiers');
    return jsonResponse(400, { error: 'Missing metadata identifiers' });
  } catch (err) {
    console.error('Webhook error:', err.message);
    return jsonResponse(400, { error: err.message });
  }
});
