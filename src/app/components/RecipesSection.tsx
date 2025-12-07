'use client';

import { useState } from 'react';
import { ChefHat, Clock, Users, X, Search } from 'lucide-react';
import { Recipe } from '@/lib/types';
import { recipes, searchRecipes, getRecipesByCategory } from '@/lib/recipes';

export default function RecipesSection() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | Recipe['category']>('all');

  const categories = [
    { id: 'all' as const, name: 'Todas', emoji: '🍽️' },
    { id: 'principal' as const, name: 'Principais', emoji: '🍗' },
    { id: 'lanche' as const, name: 'Lanches', emoji: '🥪' },
    { id: 'salada' as const, name: 'Saladas', emoji: '🥗' },
    { id: 'sobremesa' as const, name: 'Sobremesas', emoji: '🍨' }
  ];

  const filteredRecipes = searchQuery
    ? searchRecipes(searchQuery)
    : activeCategory === 'all'
    ? recipes
    : getRecipesByCategory(activeCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
          <ChefHat className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Receitas Saudáveis</h2>
          <p className="text-gray-600">Pratos brasileiros leves e deliciosos</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar receita..."
          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{cat.emoji}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredRecipes.map(recipe => (
          <button
            key={recipe.id}
            onClick={() => setSelectedRecipe(recipe)}
            className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all hover:scale-[1.02] text-left border-2 border-gray-100"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-900 flex-1">{recipe.name}</h3>
              <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full text-sm font-bold">
                {recipe.points} pts
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{recipe.servings} porções</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <ChefHat className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>Nenhuma receita encontrada</p>
        </div>
      )}

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{selectedRecipe.name}</h2>
                  <p className="text-orange-50">{selectedRecipe.description}</p>
                </div>
                <button
                  onClick={() => setSelectedRecipe(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex items-center gap-4 mt-4">
                <div className="px-4 py-2 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Clock className="w-4 h-4 inline mr-2" />
                  {selectedRecipe.prepTime}
                </div>
                <div className="px-4 py-2 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Users className="w-4 h-4 inline mr-2" />
                  {selectedRecipe.servings} porções
                </div>
                <div className="px-4 py-2 bg-white rounded-xl text-orange-600 font-bold">
                  {selectedRecipe.points} pontos
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Ingredients */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ingredientes</h3>
                <ul className="space-y-2">
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Modo de Preparo</h3>
                <ol className="space-y-3">
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 pt-1">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
