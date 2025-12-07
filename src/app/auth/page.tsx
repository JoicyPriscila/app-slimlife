'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Flame, TrendingUp, Heart, Award } from 'lucide-react';

export default function AuthPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar se usuário já está logado
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        checkUserProfile(session.user.id);
      }
      setLoading(false);
    });

    // Listener para mudanças de autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        await checkUserProfile(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error && error.code === 'PGRST116') {
        // Usuário não tem perfil, redirecionar para onboarding
        window.location.href = '/onboarding';
      } else if (data) {
        // Usuário tem perfil, redirecionar para home
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Erro ao verificar perfil:', error);
      // Em caso de erro, redirecionar para onboarding por segurança
      window.location.href = '/onboarding';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Lado Esquerdo - Branding */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl">
                  <Flame className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    SlimLife
                  </h1>
                  <p className="text-gray-600 text-lg">Seu guia de emagrecimento saudável</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Transforme sua vida com hábitos saudáveis
                </h2>
                <p className="text-lg text-gray-600">
                  Sistema de pontos personalizado, receitas brasileiras deliciosas e acompanhamento diário para você alcançar seus objetivos.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Sistema de Pontos Personalizado</h3>
                      <p className="text-sm text-gray-600">
                        Pontuação calculada especialmente para você com base no seu perfil
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="p-3 bg-teal-100 rounded-lg">
                      <Heart className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Cálculo de IMC e Peso Ideal</h3>
                      <p className="text-sm text-gray-600">
                        Acompanhe seu progresso com métricas personalizadas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="p-3 bg-cyan-100 rounded-lg">
                      <Award className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Acompanhamento Completo</h3>
                      <p className="text-sm text-gray-600">
                        Monitore água, refeições e progresso diário
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito - Formulário de Auth */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Entre ou Cadastre-se
                </h2>
                <p className="text-gray-600">
                  Comece sua jornada de emagrecimento saudável hoje
                </p>
              </div>

              <Auth
                supabaseClient={supabase}
                appearance={{
                  theme: ThemeSupa,
                  variables: {
                    default: {
                      colors: {
                        brand: '#10b981',
                        brandAccent: '#059669',
                        brandButtonText: 'white',
                        defaultButtonBackground: '#f3f4f6',
                        defaultButtonBackgroundHover: '#e5e7eb',
                      },
                      radii: {
                        borderRadiusButton: '0.75rem',
                        buttonBorderRadius: '0.75rem',
                        inputBorderRadius: '0.75rem',
                      },
                    },
                  },
                  className: {
                    container: 'space-y-4',
                    button: 'font-semibold',
                    input: 'border-2',
                  },
                }}
                localization={{
                  variables: {
                    sign_in: {
                      email_label: 'Email',
                      password_label: 'Senha',
                      email_input_placeholder: 'seu@email.com',
                      password_input_placeholder: 'Sua senha',
                      button_label: 'Entrar',
                      loading_button_label: 'Entrando...',
                      social_provider_text: 'Entrar com {{provider}}',
                      link_text: 'Já tem uma conta? Entre',
                    },
                    sign_up: {
                      email_label: 'Email',
                      password_label: 'Senha',
                      email_input_placeholder: 'seu@email.com',
                      password_input_placeholder: 'Crie uma senha',
                      button_label: 'Cadastrar',
                      loading_button_label: 'Cadastrando...',
                      social_provider_text: 'Cadastrar com {{provider}}',
                      link_text: 'Não tem uma conta? Cadastre-se',
                    },
                    forgotten_password: {
                      email_label: 'Email',
                      password_label: 'Senha',
                      email_input_placeholder: 'seu@email.com',
                      button_label: 'Enviar instruções',
                      loading_button_label: 'Enviando...',
                      link_text: 'Esqueceu sua senha?',
                    },
                  },
                }}
                providers={[]}
              />

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
