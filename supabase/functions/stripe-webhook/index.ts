/// <reference types="https://deno.land/x/types/index.d.ts" />
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import Stripe from 'https://esm.sh/stripe@11.1.0?target=deno';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
});

const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET') || '';

serve(async (req) => {
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return new Response('No signature', { status: 400 });
  }

  try {
    const body = await req.text();
    const event = stripe.webhooks.constructEvent(body, signature, endpointSecret);

    console.log('Webhook event type:', event.type);

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      const metadata = paymentIntent.metadata;

      console.log('Payment succeeded:', paymentIntent.id, 'Metadata:', metadata);

      const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
      const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

      // Check if it's a subscription payment
      if (metadata.payment_type === 'subscription' && metadata.subscription_id) {
        console.log('Processing subscription payment:', metadata.subscription_id);

        // Calculate subscription duration based on amount
        const amount = paymentIntent.amount / 100;
        let durationDays = 30; // Default monthly

        if (amount >= 120) {
          durationDays = 365; // Annual
        } else if (amount >= 75) {
          durationDays = 180; // Semester
        }

        const startDate = new Date();
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + durationDays);

        // Update subscription status to active
        const updateResponse = await fetch(
          `${supabaseUrl}/rest/v1/VoyCompanySubscriptions?id=eq.${metadata.subscription_id}`,
          {
            method: 'PATCH',
            headers: {
              'apikey': supabaseServiceKey,
              'Authorization': `Bearer ${supabaseServiceKey}`,
              'Content-Type': 'application/json',
              'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
              status: 'active',
              start_date: startDate.toISOString(),
              end_date: endDate.toISOString()
            })
          }
        );

        if (!updateResponse.ok) {
          console.error('Failed to update subscription:', await updateResponse.text());
        } else {
          console.log('Subscription activated successfully');
        }
      } else if (metadata.payment_id) {
        // Regular payment - update VoyPayments
        console.log('Processing regular payment:', metadata.payment_id);

        const updateResponse = await fetch(
          `${supabaseUrl}/rest/v1/VoyPayments?id=eq.${metadata.payment_id}`,
          {
            method: 'PATCH',
            headers: {
              'apikey': supabaseServiceKey,
              'Authorization': `Bearer ${supabaseServiceKey}`,
              'Content-Type': 'application/json',
              'Prefer': 'return=minimal'
            },
            body: JSON.stringify({
              status: 'completed',
              completed_at: new Date().toISOString()
            })
          }
        );

        if (!updateResponse.ok) {
          console.error('Failed to update payment:', await updateResponse.text());
        } else {
          console.log('Payment updated successfully');
        }
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (err) {
    console.error('Webhook error:', err.message);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 400 }
    );
  }
});
