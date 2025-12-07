'use client';

import { useState } from 'react';
import { Search, Plus, X } from 'lucide-react';
import { Food, Meal } from '@/lib/types';
import { searchFoods, foodDatabase } from '@/lib/foodDatabase';

interface FoodLoggerProps {
  onAddMeal: (meal: Meal) => void;
  mealType: 'cafe' | 'almoco' | 'jantar' | 'lanche';
  onClose: () => void;
}

export default function FoodLogger({ onAddMeal, mealType, onClose }: FoodLoggerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFoods, setSelectedFoods] = useState<{ food: Food; quantity: number }[]>([]);
  const [searchResults, setSearchResults] = useState<Food[]>([]);

  const mealNames = {
    cafe: 'Café da Manhã',
    almoco: 'Almoço',
    jantar: 'Jantar',
    lanche: 'Lanche'
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      setSearchResults(searchFoods(query));
    } else {
      setSearchResults([]);
    }
  };

  const addFood = (food: Food) => {
    const existing = selectedFoods.find(item => item.food.id === food.id);
    if (existing) {
      setSelectedFoods(selectedFoods.map(item =>
        item.food.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setSelectedFoods([...selectedFoods, { food, quantity: 1 }]);
    }
    setSearchQuery('');
    setSearchResults([]);
  };

  const removeFood = (foodId: string) => {
    setSelectedFoods(selectedFoods.filter(item => item.food.id !== foodId));
  };

  const updateQuantity = (foodId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFood(foodId);
    } else {
      setSelectedFoods(selectedFoods.map(item =>
        item.food.id === foodId ? { ...item, quantity } : item
      ));
    }
  };

  const getTotalPoints = () => {
    return selectedFoods.reduce((total, item) => total + (item.food.points * item.quantity), 0);
  };

  const handleSave = () => {
    if (selectedFoods.length === 0) return;

    const meal: Meal = {
      id: Date.now().toString(),
      type: mealType,
      foods: selectedFoods,
      totalPoints: getTotalPoints(),
      timestamp: new Date()
    };

    onAddMeal(meal);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">{mealNames[mealType]}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-emerald-50">Adicione os alimentos consumidos</p>
        </div>

        {/* Search */}
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Buscar alimento..."
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-2 bg-white border-2 border-gray-100 rounded-xl shadow-lg max-h-48 overflow-y-auto">
              {searchResults.map(food => (
                <button
                  key={food.id}
                  onClick={() => addFood(food)}
                  className="w-full px-4 py-3 text-left hover:bg-emerald-50 transition-colors flex items-center justify-between border-b last:border-b-0"
                >
                  <div>
                    <p className="font-medium text-gray-900">{food.name}</p>
                    <p className="text-sm text-gray-500">{food.portion}</p>
                  </div>
                  <span className="text-lg font-bold text-emerald-600">{food.points} pts</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Selected Foods */}
        <div className="flex-1 overflow-y-auto p-4">
          {selectedFoods.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Busque e adicione alimentos</p>
            </div>
          ) : (
            <div className="space-y-3">
              {selectedFoods.map(item => (
                <div key={item.food.id} className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.food.name}</p>
                    <p className="text-sm text-gray-500">{item.food.portion}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.food.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-emerald-500 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.food.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-emerald-500 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-emerald-600">
                      {item.food.points * item.quantity} pts
                    </p>
                  </div>

                  <button
                    onClick={() => removeFood(item.food.id)}
                    className="p-2 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {selectedFoods.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Total de Pontos:</span>
              <span className="text-3xl font-bold text-emerald-600">{getTotalPoints()}</span>
            </div>
            <button
              onClick={handleSave}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Salvar Refeição
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
