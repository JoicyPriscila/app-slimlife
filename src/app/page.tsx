'use client';

import { useState, useEffect } from 'react';
import { 
  Flame, TrendingUp, Calendar, Plus, Utensils, 
  Coffee, Sun, Moon, Apple, Scan, ChefHat, 
  Award, Target, Droplet, LogOut, User, LogIn
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import FoodLogger from './components/FoodLogger';
import WaterTracker from './components/WaterTracker';
import RecipesSection from './components/RecipesSection';
import Scanner from './components/Scanner';
import { Meal, UserProgress, Food } from '@/lib/types';

export default function SlimLife() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [userName, setUserName] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'home' | 'recipes'>('home');
  const [showFoodLogger, setShowFoodLogger] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [selectedMealType, setSelectedMealType] = useState<'cafe' | 'almoco' | 'jantar' | 'lanche'>('cafe');
  
  const [progress, setProgress] = useState<UserProgress>({
    dailyPoints: 0,
    dailyLimit: 30,
    weeklyPoints: 0,
    weeklyLimit: 210,
    waterIntake: 0,
    waterGoal: 2000,
    meals: [],
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    // Verificar autenticação SEM redirecionar automaticamente
    const checkAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Erro ao verificar sessão:', error);
          setLoading(false);
          return;
        }

        if (session) {
          setUser(session.user);
          await loadUserProfile(session.user.id);
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setUser(session.user);
        loadUserProfile(session.user.id);
      } else {
        setUser(null);
        setUserName('');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        // Se não tem perfil, redirecionar para onboarding
        if (error.code === 'PGRST116') {
          window.location.href = '/onboarding';
        }
        throw error;
      }

      if (data) {
        setUserName(data.name);
        setProgress(prev => ({
          ...prev,
          dailyLimit: data.daily_points_limit,
          weeklyLimit: data.weekly_points_limit,
          waterGoal: data.water_goal,
        }));
        
        // Carregar dados do dia
        await loadDailyData(userId);
      }
    } catch (error) {
      console.error('Erro ao carregar perfil:', error);
    }
  };

  const loadDailyData = async (userId: string) => {
    const today = new Date().toISOString().split('T')[0];
    
    try {
      // Carregar refeições do dia
      const { data: meals } = await supabase
        .from('meal_logs')
        .select('*')
        .eq('user_id', userId)
        .eq('date', today);

      // Carregar água do dia
      const { data: water } = await supabase
        .from('water_logs')
        .select('*')
        .eq('user_id', userId)
        .eq('date', today)
        .single();

      if (meals) {
        const totalPoints = meals.reduce((sum, meal) => sum + meal.total_points, 0);
        setProgress(prev => ({
          ...prev,
          dailyPoints: totalPoints,
          weeklyPoints: totalPoints, // Simplificado - pode calcular semana completa
          meals: meals.map(m => ({
            id: m.id,
            type: m.meal_type,
            foods: m.foods,
            totalPoints: m.total_points,
            timestamp: new Date(m.created_at)
          })),
        }));
      }

      if (water) {
        setProgress(prev => ({
          ...prev,
          waterIntake: water.amount,
        }));
      }
    } catch (error) {
      console.error('Erro ao carregar dados diários:', error);
    }
  };

  const handleAddMeal = async (meal: Meal) => {
    if (!user) return;

    try {
      const { error } = await supabase.from('meal_logs').insert({
        user_id: user.id,
        meal_type: meal.type,
        foods: meal.foods,
        total_points: meal.totalPoints,
        date: new Date().toISOString().split('T')[0],
      });

      if (error) throw error;

      setProgress(prev => ({
        ...prev,
        meals: [...prev.meals, meal],
        dailyPoints: prev.dailyPoints + meal.totalPoints,
        weeklyPoints: prev.weeklyPoints + meal.totalPoints
      }));
    } catch (error) {
      console.error('Erro ao salvar refeição:', error);
    }
  };

  const handleUpdateWater = async (amount: number) => {
    if (!user) {
      setShowLoginPrompt(true);
      return;
    }

    try {
      const today = new Date().toISOString().split('T')[0];
      
      const { error } = await supabase
        .from('water_logs')
        .upsert({
          user_id: user.id,
          amount: amount,
          date: today,
        });

      if (error) throw error;

      setProgress(prev => ({
        ...prev,
        waterIntake: amount
      }));
    } catch (error) {
      console.error('Erro ao salvar água:', error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setUserName('');
    setProgress({
      dailyPoints: 0,
      dailyLimit: 30,
      weeklyPoints: 0,
      weeklyLimit: 210,
      waterIntake: 0,
      waterGoal: 2000,
      meals: [],
      date: new Date().toISOString().split('T')[0]
    });
  };

  const handleScannerDetect = (food: Food) => {
    const meal: Meal = {
      id: Date.now().toString(),
      type: selectedMealType,
      foods: [{ food, quantity: 1 }],
      totalPoints: food.points,
      timestamp: new Date()
    };
    handleAddMeal(meal);
  };

  const openFoodLogger = (type: 'cafe' | 'almoco' | 'jantar' | 'lanche') => {
    if (!user) {
      setShowLoginPrompt(true);
      return;
    }
    setSelectedMealType(type);
    setShowFoodLogger(true);
  };

  const openScanner = (type: 'cafe' | 'almoco' | 'jantar' | 'lanche') => {
    if (!user) {
      setShowLoginPrompt(true);
      return;
    }
    setSelectedMealType(type);
    setShowScanner(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  const dailyPercentage = Math.min((progress.dailyPoints / progress.dailyLimit) * 100, 100);
  const weeklyPercentage = Math.min((progress.weeklyPoints / progress.weeklyLimit) * 100, 100);
  const pointsRemaining = Math.max(progress.dailyLimit - progress.dailyPoints, 0);

  const getMealsByType = (type: Meal['type']) => {
    return progress.meals.filter(meal => meal.type === type);
  };

  const getMealPoints = (type: Meal['type']) => {
    return getMealsByType(type).reduce((total, meal) => total + meal.totalPoints, 0);
  };

  const mealTypes = [
    { id: 'cafe' as const, name: 'Café', icon: Coffee, color: 'from-amber-500 to-orange-500' },
    { id: 'almoco' as const, name: 'Almoço', icon: Sun, color: 'from-yellow-500 to-amber-500' },
    { id: 'jantar' as const, name: 'Jantar', icon: Moon, color: 'from-indigo-500 to-purple-500' },
    { id: 'lanche' as const, name: 'Lanche', icon: Apple, color: 'from-pink-500 to-rose-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Flame className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">SlimLife</h1>
                <p className="text-emerald-50 text-sm">
                  {user ? `Olá, ${userName || 'Usuário'}! 👋` : 'Seu guia de emagrecimento saudável'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <>
                  <div className="text-right">
                    <p className="text-sm text-emerald-50">Pontos Restantes</p>
                    <p className="text-4xl font-bold">{pointsRemaining}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                    title="Sair"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <a
                  href="/auth"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-all shadow-lg"
                >
                  <LogIn className="w-5 h-5" />
                  Entrar
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-6 py-4 font-semibold transition-all relative ${
                activeTab === 'home'
                  ? 'text-emerald-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Utensils className="w-5 h-5 inline mr-2" />
              Diário
              {activeTab === 'home' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-t-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('recipes')}
              className={`px-6 py-4 font-semibold transition-all relative ${
                activeTab === 'recipes'
                  ? 'text-orange-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <ChefHat className="w-5 h-5 inline mr-2" />
              Receitas
              {activeTab === 'recipes' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-t-full" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'home' ? (
          <div className="space-y-8">
            {/* Info Banner for Non-Logged Users */}
            {!user && (
              <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-4">
                  <User className="w-12 h-12" />
                  <div>
                    <h3 className="text-xl font-bold mb-1">Explore o SlimLife! 👀</h3>
                    <p className="text-blue-50 mb-3">
                      Você está navegando no modo visitante. Para registrar suas refeições e acompanhar seu progresso, faça login.
                    </p>
                    <a
                      href="/auth"
                      className="inline-flex items-center gap-2 px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                    >
                      <LogIn className="w-4 h-4" />
                      Fazer Login
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Points Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Daily Points */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Pontos Diários</h3>
                      <p className="text-sm text-gray-600">Meta: {progress.dailyLimit} pontos</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-emerald-600">{progress.dailyPoints}</p>
                    <p className="text-sm text-gray-500">{Math.round(dailyPercentage)}%</p>
                  </div>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-500"
                    style={{ width: `${dailyPercentage}%` }}
                  />
                </div>
                {pointsRemaining > 0 && (
                  <p className="text-sm text-gray-600 mt-3">
                    Você ainda tem <span className="font-bold text-emerald-600">{pointsRemaining} pontos</span> disponíveis hoje
                  </p>
                )}
                {pointsRemaining === 0 && (
                  <p className="text-sm text-amber-600 mt-3 font-medium">
                    ⚠️ Meta diária atingida! Evite ultrapassar.
                  </p>
                )}
              </div>

              {/* Weekly Points */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Pontos Semanais</h3>
                      <p className="text-sm text-gray-600">Meta: {progress.weeklyLimit} pontos</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-teal-600">{progress.weeklyPoints}</p>
                    <p className="text-sm text-gray-500">{Math.round(weeklyPercentage)}%</p>
                  </div>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full transition-all duration-500"
                    style={{ width: `${weeklyPercentage}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Restam <span className="font-bold text-teal-600">{progress.weeklyLimit - progress.weeklyPoints}</span> pontos esta semana
                </p>
              </div>
            </div>

            {/* Water Tracker */}
            <WaterTracker
              waterIntake={progress.waterIntake}
              waterGoal={progress.waterGoal}
              onUpdate={handleUpdateWater}
            />

            {/* Meals Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Refeições de Hoje</h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  {new Date().toLocaleDateString('pt-BR', { 
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long' 
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mealTypes.map(meal => {
                  const Icon = meal.icon;
                  const mealPoints = getMealPoints(meal.id);
                  const meals = getMealsByType(meal.id);

                  return (
                    <div
                      key={meal.id}
                      className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 bg-gradient-to-br ${meal.color} rounded-xl`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{meal.name}</h3>
                            <p className="text-sm text-gray-600">
                              {meals.length === 0 ? 'Não registrado' : `${meals.length} item(ns)`}
                            </p>
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">{mealPoints} pts</span>
                      </div>

                      {meals.length > 0 && (
                        <div className="mb-4 space-y-2">
                          {meals.map(m => (
                            <div key={m.id} className="bg-gray-50 rounded-lg p-3">
                              {m.foods.map((item, idx) => (
                                <div key={idx} className="flex justify-between text-sm">
                                  <span className="text-gray-700">
                                    {item.quantity}x {item.food.name}
                                  </span>
                                  <span className="font-medium text-gray-900">
                                    {item.food.points * item.quantity} pts
                                  </span>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => openFoodLogger(meal.id)}
                          className="py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <Plus className="w-4 h-4" />
                          Adicionar
                        </button>
                        <button
                          onClick={() => openScanner(meal.id)}
                          className="py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <Scan className="w-4 h-4" />
                          Scanner
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Motivational Card */}
            {user && progress.dailyPoints <= progress.dailyLimit && (
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-4">
                  <Award className="w-12 h-12" />
                  <div>
                    <h3 className="text-xl font-bold mb-1">Continue assim! 🎉</h3>
                    <p className="text-emerald-50">
                      Você está no caminho certo para uma vida mais saudável
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <RecipesSection />
        )}
      </main>

      {/* Modals */}
      {showFoodLogger && (
        <FoodLogger
          mealType={selectedMealType}
          onAddMeal={handleAddMeal}
          onClose={() => setShowFoodLogger(false)}
        />
      )}

      {showScanner && (
        <Scanner
          onFoodDetected={handleScannerDetect}
          onClose={() => setShowScanner(false)}
        />
      )}

      {/* Login Prompt Modal */}
      {showLoginPrompt && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Login Necessário</h3>
              <p className="text-gray-600 mb-6">
                Para registrar refeições, fotos e acompanhar seu progresso, você precisa fazer login.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowLoginPrompt(false)}
                  className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  Cancelar
                </button>
                <a
                  href="/auth"
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all text-center"
                >
                  Fazer Login
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
