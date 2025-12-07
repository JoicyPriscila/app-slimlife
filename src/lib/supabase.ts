import { createClient } from '@supabase/supabase-js';

// Validação de variáveis de ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Verificar se as variáveis estão definidas
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Variáveis de ambiente do Supabase não configuradas. Usando cliente mock.');
}

// Criar cliente com valores padrão seguros
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);

// Tipos para o banco de dados
export interface UserProfile {
  id: string;
  email: string;
  name: string;
  weight?: number;
  height?: number;
  age?: number;
  goal_weight?: number;
  daily_points_limit: number;
  weekly_points_limit: number;
  water_goal: number;
  created_at: string;
  updated_at: string;
}

export interface MealLog {
  id: string;
  user_id: string;
  meal_type: 'cafe' | 'almoco' | 'jantar' | 'lanche';
  foods: any[];
  total_points: number;
  date: string;
  created_at: string;
}

export interface WaterLog {
  id: string;
  user_id: string;
  amount: number;
  date: string;
  created_at: string;
}
