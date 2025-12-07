// SlimLife - Banco de Dados de Alimentos Brasileiros

import { Food } from './types';

export const foodDatabase: Food[] = [
  // Proteínas
  { id: 'p1', name: 'Peito de Frango Grelhado', category: 'proteina', points: 3, portion: '100g', calories: 165 },
  { id: 'p2', name: 'Filé de Tilápia', category: 'proteina', points: 2, portion: '100g', calories: 96 },
  { id: 'p3', name: 'Ovo Cozido', category: 'proteina', points: 2, portion: '1 unidade', calories: 78 },
  { id: 'p4', name: 'Carne Moída Magra', category: 'proteina', points: 4, portion: '100g', calories: 176 },
  { id: 'p5', name: 'Peito de Peru Fatiado', category: 'proteina', points: 1, portion: '2 fatias', calories: 50 },
  
  // Carboidratos
  { id: 'c1', name: 'Arroz Branco Cozido', category: 'carboidrato', points: 4, portion: '4 colheres', calories: 130 },
  { id: 'c2', name: 'Arroz Integral', category: 'carboidrato', points: 3, portion: '4 colheres', calories: 112 },
  { id: 'c3', name: 'Feijão Carioca', category: 'carboidrato', points: 2, portion: '1 concha', calories: 76 },
  { id: 'c4', name: 'Pão Francês', category: 'carboidrato', points: 4, portion: '1 unidade', calories: 135 },
  { id: 'c5', name: 'Pão Integral', category: 'carboidrato', points: 3, portion: '2 fatias', calories: 138 },
  { id: 'c6', name: 'Batata Doce Cozida', category: 'carboidrato', points: 3, portion: '100g', calories: 86 },
  { id: 'c7', name: 'Macarrão Integral', category: 'carboidrato', points: 4, portion: '1 pegador', calories: 124 },
  { id: 'c8', name: 'Tapioca', category: 'carboidrato', points: 3, portion: '1 unidade', calories: 98 },
  
  // Frutas
  { id: 'f1', name: 'Banana', category: 'fruta', points: 2, portion: '1 unidade', calories: 89 },
  { id: 'f2', name: 'Maçã', category: 'fruta', points: 1, portion: '1 unidade', calories: 52 },
  { id: 'f3', name: 'Mamão Papaia', category: 'fruta', points: 1, portion: '1 fatia', calories: 43 },
  { id: 'f4', name: 'Laranja', category: 'fruta', points: 1, portion: '1 unidade', calories: 47 },
  { id: 'f5', name: 'Melancia', category: 'fruta', points: 1, portion: '1 fatia', calories: 30 },
  { id: 'f6', name: 'Abacaxi', category: 'fruta', points: 1, portion: '2 rodelas', calories: 50 },
  { id: 'f7', name: 'Morango', category: 'fruta', points: 0, portion: '10 unidades', calories: 32 },
  
  // Vegetais
  { id: 'v1', name: 'Alface', category: 'vegetal', points: 0, portion: 'à vontade', calories: 5 },
  { id: 'v2', name: 'Tomate', category: 'vegetal', points: 0, portion: '1 unidade', calories: 18 },
  { id: 'v3', name: 'Cenoura', category: 'vegetal', points: 0, portion: '1 unidade', calories: 25 },
  { id: 'v4', name: 'Brócolis', category: 'vegetal', points: 0, portion: '1 xícara', calories: 31 },
  { id: 'v5', name: 'Abobrinha', category: 'vegetal', points: 0, portion: '1 unidade', calories: 17 },
  { id: 'v6', name: 'Pepino', category: 'vegetal', points: 0, portion: '1 unidade', calories: 16 },
  
  // Laticínios
  { id: 'l1', name: 'Leite Desnatado', category: 'laticinios', points: 2, portion: '200ml', calories: 68 },
  { id: 'l2', name: 'Iogurte Natural Light', category: 'laticinios', points: 2, portion: '1 pote', calories: 80 },
  { id: 'l3', name: 'Queijo Minas Light', category: 'laticinios', points: 2, portion: '1 fatia', calories: 70 },
  { id: 'l4', name: 'Requeijão Light', category: 'laticinios', points: 1, portion: '1 colher', calories: 45 },
  
  // Gorduras
  { id: 'g1', name: 'Azeite de Oliva', category: 'gorduras', points: 2, portion: '1 colher sopa', calories: 119 },
  { id: 'g2', name: 'Abacate', category: 'gorduras', points: 3, portion: '1/4 unidade', calories: 80 },
  { id: 'g3', name: 'Castanha do Pará', category: 'gorduras', points: 3, portion: '3 unidades', calories: 98 },
  { id: 'g4', name: 'Amendoim', category: 'gorduras', points: 4, portion: '1 colher sopa', calories: 104 },
  
  // Bebidas
  { id: 'b1', name: 'Café sem Açúcar', category: 'bebidas', points: 0, portion: '1 xícara', calories: 2 },
  { id: 'b2', name: 'Chá Verde', category: 'bebidas', points: 0, portion: '1 xícara', calories: 0 },
  { id: 'b3', name: 'Suco de Laranja Natural', category: 'bebidas', points: 2, portion: '200ml', calories: 90 },
  { id: 'b4', name: 'Água de Coco', category: 'bebidas', points: 2, portion: '200ml', calories: 46 },
  
  // Snacks
  { id: 's1', name: 'Biscoito Integral', category: 'snacks', points: 3, portion: '3 unidades', calories: 90 },
  { id: 's2', name: 'Barra de Cereal Light', category: 'snacks', points: 2, portion: '1 unidade', calories: 80 },
  { id: 's3', name: 'Pipoca sem Óleo', category: 'snacks', points: 2, portion: '2 xícaras', calories: 62 },
  { id: 's4', name: 'Tapioca com Queijo', category: 'snacks', points: 5, portion: '1 unidade', calories: 180 },
];

export const searchFoods = (query: string): Food[] => {
  const lowerQuery = query.toLowerCase();
  return foodDatabase.filter(food => 
    food.name.toLowerCase().includes(lowerQuery)
  );
};

export const getFoodById = (id: string): Food | undefined => {
  return foodDatabase.find(food => food.id === id);
};

export const getFoodsByCategory = (category: Food['category']): Food[] => {
  return foodDatabase.filter(food => food.category === category);
};
