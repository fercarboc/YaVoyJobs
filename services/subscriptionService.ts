import { supabase } from './supabase';

export const SUBSCRIPTION_PLANS = {
  monthly: {
    name: 'Mensual',
    price: 15,
    duration_days: 30,
    description: 'Contrataciones ilimitadas durante 1 mes'
  },
  semester: {
    name: 'Semestral',
    price: 75,
    duration_days: 180,
    description: 'Contrataciones ilimitadas durante 6 meses',
    savings: '12.5€/mes - Ahorra 15€'
  },
  annual: {
    name: 'Anual',
    price: 120,
    duration_days: 365,
    description: 'Contrataciones ilimitadas durante 1 año',
    savings: '10€/mes - Ahorra 60€'
  }
} as const;

export type SubscriptionType = keyof typeof SUBSCRIPTION_PLANS;

export interface Subscription {
  id: string;
  company_user_id: string;
  subscription_type: SubscriptionType;
  amount: number;
  currency: string;
  status: 'pending' | 'active' | 'expired' | 'cancelled';
  start_date: string | null;
  end_date: string | null;
  created_at: string;
  updated_at: string;
  stripe_payment_intent_id: string | null;
  metadata: any;
}

export async function createSubscription(
  companyUserId: string,
  subscriptionType: SubscriptionType
): Promise<Subscription> {
  const plan = SUBSCRIPTION_PLANS[subscriptionType];

  const { data, error } = await supabase
    .from('VoyCompanySubscriptions')
    .insert([{
      company_user_id: companyUserId,
      subscription_type: subscriptionType,
      amount: plan.price,
      currency: 'EUR',
      status: 'pending',
      metadata: {
        plan_name: plan.name,
        duration_days: plan.duration_days
      }
    }])
    .select()
    .single();

  if (error) throw error;
  return data as Subscription;
}

export async function createSubscriptionPayment(
  subscriptionId: string,
  amount: number,
  companyUserId: string
): Promise<{ clientSecret: string; paymentIntentId: string }> {
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !anonKey) {
      throw new Error('Variables de entorno no configuradas');
    }
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('No hay sesión activa');
    }
    
    const functionUrl = `${supabaseUrl}/functions/v1/create-subscription-payment`;
    
    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
        'apikey': anonKey,
      },
      body: JSON.stringify({
        subscription_id: subscriptionId,
        amount,
        metadata: {
          company_user_id: companyUserId,
          payment_type: 'subscription'
        }
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Error creando payment intent');
    }

    const data = await response.json();
    return {
      clientSecret: data.clientSecret,
      paymentIntentId: data.paymentIntentId
    };
  } catch (err) {
    console.error('Error in createSubscriptionPayment:', err);
    throw err;
  }
}

export async function getActiveSubscription(companyUserId: string): Promise<Subscription | null> {
  try {
    const { data, error } = await supabase
      .from('VoyCompanySubscriptions')
      .select('*')
      .eq('company_user_id', companyUserId)
      .eq('status', 'active')
      .gte('end_date', new Date().toISOString())
      .lte('start_date', new Date().toISOString())
      .order('end_date', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error && error.code !== 'PGRST116') throw error;
    return data as Subscription | null;
  } catch (err) {
    console.error('Error getting active subscription:', err);
    return null;
  }
}

export async function getCompanySubscriptions(companyUserId: string): Promise<Subscription[]> {
  try {
    const { data, error } = await supabase
      .from('VoyCompanySubscriptions')
      .select('*')
      .eq('company_user_id', companyUserId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as Subscription[];
  } catch (err) {
    console.error('Error getting subscriptions:', err);
    return [];
  }
}
