'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Flame, User, Activity, TrendingUp, Target, ArrowRight } from 'lucide-react';

interface OnboardingData {
  name: string;
  sex: 'masculino' | 'feminino' | '';
  age: string;
  weight: string;
  height: string;
  activityLevel: 'sedentario' | 'leve' | 'moderado' | 'intenso' | 'muito_intenso' | '';
}

export default function OnboardingPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    name: '',
    sex: '',
    age: '',
    weight: '',
    height: '',
    activityLevel: ''
  });

  const [calculatedData, setCalculatedData] = useState({
    bmi: 0,
    idealWeight: 0,
    dailyPoints: 0
  });

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        window.location.href = '/auth';
      } else {
        setUser(session.user);
        setData(prev => ({ ...prev, name: session.user.email?.split('@')[0] || '' }));
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  // Calcular IMC
  const calculateBMI = (weight: number, height: number): number => {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
  };

  // Calcular peso ideal (Fórmula de Devine)
  const calculateIdealWeight = (height: number, sex: string): number => {
    const heightInInches = height / 2.54;
    if (sex === 'masculino') {
      return 50 + 2.3 * (heightInInches - 60);
    } else {
      return 45.5 + 2.3 * (heightInInches - 60);
    }
  };

  // Calcular pontuação diária personalizada
  const calculateDailyPoints = (
    weight: number,
    height: number,
    age: number,
    sex: string,
    activityLevel: string
  ): number => {
    // Taxa Metabólica Basal (TMB) - Fórmula de Harris-Benedict
    let tmb: number;
    if (sex === 'masculino') {
      tmb = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      tmb = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // Fator de atividade física
    const activityFactors: { [key: string]: number } = {
      sedentario: 1.2,
      leve: 1.375,
      moderado: 1.55,
      intenso: 1.725,
      muito_intenso: 1.9
    };

    const tdee = tmb * activityFactors[activityLevel];
    
    // Déficit calórico de 500 kcal para perda de peso saudável
    const targetCalories = tdee - 500;
    
    // Converter calorias em pontos (1 ponto = 50 calorias)
    const dailyPoints = Math.round(targetCalories / 50);
    
    return dailyPoints;
  };

  // Atualizar cálculos quando dados mudarem
  useEffect(() => {
    if (data.weight && data.height && data.age && data.sex && data.activityLevel) {
      const weight = parseFloat(data.weight);
      const height = parseFloat(data.height);
      const age = parseInt(data.age);

      const bmi = calculateBMI(weight, height);
      const idealWeight = calculateIdealWeight(height, data.sex);
      const dailyPoints = calculateDailyPoints(weight, height, age, data.sex, data.activityLevel);

      setCalculatedData({
        bmi: Math.round(bmi * 10) / 10,
        idealWeight: Math.round(idealWeight * 10) / 10,
        dailyPoints
      });
    }
  }, [data]);

  const handleNext = () => {
    if (step === 1 && data.name && data.sex && data.age) {
      setStep(2);
    } else if (step === 2 && data.weight && data.height && data.activityLevel) {
      setStep(3);
    }
  };

  const handleSave = async () => {
    if (!user) return;

    setSaving(true);
    try {
      const { error } = await supabase.from('user_profiles').insert({
        id: user.id,
        email: user.email,
        name: data.name,
        sex: data.sex,
        age: parseInt(data.age),
        weight: parseFloat(data.weight),
        height: parseFloat(data.height),
        activity_level: data.activityLevel,
        bmi: calculatedData.bmi,
        ideal_weight: calculatedData.idealWeight,
        daily_points_limit: calculatedData.dailyPoints,
        weekly_points_limit: calculatedData.dailyPoints * 7,
        water_goal: 2000
      });

      if (error) throw error;

      window.location.href = '/';
    } catch (error) {
      console.error('Erro ao salvar perfil:', error);
      alert('Erro ao salvar perfil. Tente novamente.');
    } finally {
      setSaving(false);
    }
  };

  const getBMICategory = (bmi: number): { text: string; color: string } => {
    if (bmi < 18.5) return { text: 'Abaixo do peso', color: 'text-blue-600' };
    if (bmi < 25) return { text: 'Peso normal', color: 'text-emerald-600' };
    if (bmi < 30) return { text: 'Sobrepeso', color: 'text-amber-600' };
    return { text: 'Obesidade', color: 'text-red-600' };
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl">
              <Flame className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              SlimLife
            </h1>
          </div>
          <p className="text-xl text-gray-600">Configure seu perfil personalizado</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Passo {step} de 3</span>
            <span className="text-sm font-medium text-emerald-600">{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Informações Básicas */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <User className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Informações Básicas</h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Como você gostaria de ser chamado?
              </label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sexo</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setData({ ...data, sex: 'masculino' })}
                  className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                    data.sex === 'masculino'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Masculino
                </button>
                <button
                  onClick={() => setData({ ...data, sex: 'feminino' })}
                  className={`py-4 px-6 rounded-xl font-semibold transition-all ${
                    data.sex === 'feminino'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Feminino
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Idade</label>
              <input
                type="number"
                value={data.age}
                onChange={(e) => setData({ ...data, age: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="Ex: 30"
                min="10"
                max="120"
              />
            </div>

            <button
              onClick={handleNext}
              disabled={!data.name || !data.sex || !data.age}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Continuar
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Step 2: Medidas e Atividade */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-teal-100 rounded-xl">
                <Activity className="w-6 h-6 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Medidas e Atividade Física</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Peso (kg)</label>
                <input
                  type="number"
                  value={data.weight}
                  onChange={(e) => setData({ ...data, weight: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="Ex: 75.5"
                  step="0.1"
                  min="30"
                  max="300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Altura (cm)</label>
                <input
                  type="number"
                  value={data.height}
                  onChange={(e) => setData({ ...data, height: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none transition-colors"
                  placeholder="Ex: 170"
                  min="100"
                  max="250"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nível de Atividade Física
              </label>
              <div className="space-y-2">
                {[
                  { value: 'sedentario', label: 'Sedentário', desc: 'Pouco ou nenhum exercício' },
                  { value: 'leve', label: 'Leve', desc: 'Exercício 1-3 dias/semana' },
                  { value: 'moderado', label: 'Moderado', desc: 'Exercício 3-5 dias/semana' },
                  { value: 'intenso', label: 'Intenso', desc: 'Exercício 6-7 dias/semana' },
                  { value: 'muito_intenso', label: 'Muito Intenso', desc: 'Exercício 2x/dia' }
                ].map((activity) => (
                  <button
                    key={activity.value}
                    onClick={() => setData({ ...data, activityLevel: activity.value as any })}
                    className={`w-full p-4 rounded-xl text-left transition-all ${
                      data.activityLevel === activity.value
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="font-semibold">{activity.label}</div>
                    <div className={`text-sm ${data.activityLevel === activity.value ? 'text-teal-50' : 'text-gray-500'}`}>
                      {activity.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
              >
                Voltar
              </button>
              <button
                onClick={handleNext}
                disabled={!data.weight || !data.height || !data.activityLevel}
                className="flex-1 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Continuar
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Resultados */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-cyan-100 rounded-xl">
                <Target className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Seu Plano Personalizado</h2>
            </div>

            <div className="space-y-4">
              {/* IMC */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Índice de Massa Corporal (IMC)</h3>
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-blue-600">{calculatedData.bmi}</span>
                  <span className={`text-lg font-semibold mb-1 ${getBMICategory(calculatedData.bmi).color}`}>
                    {getBMICategory(calculatedData.bmi).text}
                  </span>
                </div>
              </div>

              {/* Peso Ideal */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Peso Ideal Sugerido</h3>
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-emerald-600">{calculatedData.idealWeight}</span>
                  <span className="text-lg font-semibold text-gray-600 mb-1">kg</span>
                </div>
                {parseFloat(data.weight) > calculatedData.idealWeight && (
                  <p className="text-sm text-gray-600 mt-2">
                    Meta: perder {(parseFloat(data.weight) - calculatedData.idealWeight).toFixed(1)} kg
                  </p>
                )}
              </div>

              {/* Pontuação Diária */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Sua Pontuação Diária</h3>
                  <Flame className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-purple-600">{calculatedData.dailyPoints}</span>
                  <span className="text-lg font-semibold text-gray-600 mb-1">pontos/dia</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Calculado com base no seu perfil para perda de peso saudável
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>💡 Dica:</strong> Esta pontuação foi calculada especialmente para você, considerando seu metabolismo, nível de atividade e objetivo de emagrecimento saudável.
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
              >
                Voltar
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex-1 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Salvando...' : 'Começar Jornada! 🎉'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
