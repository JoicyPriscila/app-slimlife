'use client';

import { useState, useEffect } from 'react';
import { Droplet, Plus, Minus, Target } from 'lucide-react';

interface WaterTrackerProps {
  waterIntake: number;
  waterGoal: number;
  onUpdate: (amount: number) => void;
}

export default function WaterTracker({ waterIntake, waterGoal, onUpdate }: WaterTrackerProps) {
  const [showAnimation, setShowAnimation] = useState(false);

  const percentage = Math.min((waterIntake / waterGoal) * 100, 100);
  const glassSize = 250; // ml

  const addWater = (amount: number) => {
    onUpdate(waterIntake + amount);
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 500);
  };

  const removeWater = () => {
    if (waterIntake >= glassSize) {
      onUpdate(waterIntake - glassSize);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg border border-blue-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-500 rounded-xl">
            <Droplet className="w-6 h-6 text-white" fill="currentColor" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Hidratação</h3>
            <p className="text-sm text-gray-600">Meta diária: {waterGoal}ml</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-blue-600">{waterIntake}ml</p>
          <p className="text-sm text-gray-600">{Math.round(percentage)}%</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="h-4 bg-white rounded-full overflow-hidden shadow-inner">
          <div
            className={`h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full transition-all duration-500 ${
              showAnimation ? 'scale-105' : ''
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>0ml</span>
          <span>{waterGoal}ml</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => addWater(250)}
          className="bg-white hover:bg-blue-50 border-2 border-blue-200 rounded-xl p-4 transition-all hover:scale-105 hover:shadow-md"
        >
          <Droplet className="w-6 h-6 text-blue-500 mx-auto mb-2" />
          <p className="text-sm font-semibold text-gray-900">250ml</p>
          <p className="text-xs text-gray-500">Copo</p>
        </button>

        <button
          onClick={() => addWater(500)}
          className="bg-white hover:bg-blue-50 border-2 border-blue-200 rounded-xl p-4 transition-all hover:scale-105 hover:shadow-md"
        >
          <Droplet className="w-7 h-7 text-blue-500 mx-auto mb-2" />
          <p className="text-sm font-semibold text-gray-900">500ml</p>
          <p className="text-xs text-gray-500">Garrafa</p>
        </button>

        <button
          onClick={() => addWater(1000)}
          className="bg-white hover:bg-blue-50 border-2 border-blue-200 rounded-xl p-4 transition-all hover:scale-105 hover:shadow-md"
        >
          <Droplet className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <p className="text-sm font-semibold text-gray-900">1L</p>
          <p className="text-xs text-gray-500">Litro</p>
        </button>
      </div>

      {/* Remove Water */}
      {waterIntake > 0 && (
        <button
          onClick={removeWater}
          className="w-full mt-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          <Minus className="w-4 h-4" />
          <span className="text-sm font-medium">Remover 250ml</span>
        </button>
      )}

      {/* Achievement */}
      {percentage >= 100 && (
        <div className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl p-4 text-center animate-bounce">
          <Target className="w-6 h-6 mx-auto mb-2" />
          <p className="font-bold">Meta Atingida! 🎉</p>
          <p className="text-sm text-emerald-50">Parabéns pela hidratação!</p>
        </div>
      )}
    </div>
  );
}
