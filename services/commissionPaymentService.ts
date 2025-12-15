import { supabase } from './supabase';

export interface CommissionPaymentPayload {
  jobId: string;
  payerUserId: string;
  totalFee: number;
  currency: string;
}

export async function startCommissionPayment(payload: CommissionPaymentPayload) {
  // Aquí deberías llamar a un endpoint backend/serverless que cree el PaymentIntent de Stripe
  // y registre el pago en VoyPayments. Simulación básica:
  const { data, error } = await supabase
    .from('VoyPayments')
    .insert([
      {
        user_id: payload.payerUserId,
        job_id: payload.jobId,
        amount: payload.totalFee,
        currency: payload.currency,
        status: 'pending',
        // stripe_payment_intent_id: ...
      },
    ])
    .select()
    .single();
  if (error) throw new Error('Error iniciando pago de comisión: ' + error.message);
  return data;
}

export async function onPaymentSuccess(jobId: string) {
  // Marca seguro como pagado y actualiza el pago
  const { error: insuranceError } = await supabase
    .from('VoyJobInsurance')
    .update({ status: 'PAID' })
    .eq('job_id', jobId);
  if (insuranceError) throw new Error('Error actualizando seguro: ' + insuranceError.message);

  const { error: paymentError } = await supabase
    .from('VoyPayments')
    .update({ status: 'paid' })
    .eq('job_id', jobId);
  if (paymentError) throw new Error('Error actualizando pago: ' + paymentError.message);
}
