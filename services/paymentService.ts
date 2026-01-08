import { supabase } from './supabase';

export interface Payment {
  id: string;
  employer_id: string;
  worker_id: string;
  amount: number;
  commission: number;
  payment_type: 'PARTICULAR' | 'COMPANY';
  status: 'pending' | 'completed' | 'failed';
  stripe_payment_intent_id?: string;
  created_at: string;
  completed_at?: string;
}

export const paymentService = {
  async createPayment(
    employerId: string,
    workerId: string,
    amount: number,
    paymentType: 'PARTICULAR' | 'COMPANY'
  ): Promise<{ clientSecret: string; paymentId: string }> {
    // Determine commission based on payment type and subscription status
    let commission = paymentType === 'PARTICULAR' ? 3 : 15;

    // If company, check for active subscription
    if (paymentType === 'COMPANY') {
      const { data: activeSubscription } = await supabase
        .from('VoyCompanySubscriptions')
        .select('*')
        .eq('company_user_id', employerId)
        .eq('status', 'active')
        .gte('end_date', new Date().toISOString())
        .maybeSingle();

      if (activeSubscription) {
        commission = 0; // No commission with active subscription
      }
    }

    // Create payment record
    const { data: payment, error: paymentError } = await supabase
      .from('VoyPayments')
      .insert({
        employer_id: employerId,
        worker_id: workerId,
        amount,
        commission,
        payment_type: paymentType,
        status: 'pending'
      })
      .select()
      .single();

    if (paymentError) throw paymentError;

    // Create Stripe PaymentIntent via Edge Function
    const { data: session } = await supabase.auth.getSession();
    
    const { data, error } = await supabase.functions.invoke('create-payment', {
      body: {
        payment_id: payment.id,
        amount: commission
      },
      headers: {
        Authorization: `Bearer ${session.session?.access_token}`
      }
    });

    if (error) throw error;

    return {
      clientSecret: data.clientSecret,
      paymentId: payment.id
    };
  },

  async getPaymentsByEmployer(employerId: string): Promise<Payment[]> {
    const { data, error } = await supabase
      .from('VoyPayments')
      .select('*')
      .eq('employer_id', employerId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },

  async getPaymentsByWorker(workerId: string): Promise<Payment[]> {
    const { data, error } = await supabase
      .from('VoyPayments')
      .select('*')
      .eq('worker_id', workerId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  },
  async recordJobPayment(params: {
    userId: string;
    jobId: string;
    applicationId: string;
    amount: number;
    currency?: string;
    status?: 'pending' | 'completed' | 'failed';
  }): Promise<void> {
    const { error } = await supabase.from('VoyPayments').insert({
      user_id: params.userId,
      job_id: params.jobId,
      application_id: params.applicationId,
      amount: params.amount,
      currency: params.currency ?? 'EUR',
      status: params.status ?? 'pending',
    });

    if (error) throw error;
  },
};
