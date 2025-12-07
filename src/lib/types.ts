// SlimLife - Tipos TypeScript

export interface Food {
  id: string;
  name: string;
  category: 'proteina' | 'carboidrato' | 'fruta' | 'vegetal' | 'laticinios' | 'gorduras' | 'bebidas' | 'snacks';
  points: number;
  portion: string;
  calories?: number;
}

export interface Meal {
  id: string;
  type: 'cafe' | 'almoco' | 'jantar' | 'lanche';
  foods: {
    food: Food;
    quantity: number;
  }[];
  totalPoints: number;
  timestamp: Date;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  points: number;
  servings: number;
  prepTime: string;
  ingredients: string[];
  instructions: string[];
  image?: string;
  category: 'principal' | 'lanche' | 'sobremesa' | 'salada';
}

export interface UserProgress {
  dailyPoints: number;
  dailyLimit: number;
  weeklyPoints: number;
  weeklyLimit: number;
  waterIntake: number;
  waterGoal: number;
  meals: Meal[];
  date: string;
}
