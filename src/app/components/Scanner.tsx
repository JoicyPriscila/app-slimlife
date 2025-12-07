'use client';

import { useState } from 'react';
import { Camera, Barcode, Scan, X, Loader2 } from 'lucide-react';
import { Food } from '@/lib/types';
import { foodDatabase } from '@/lib/foodDatabase';

interface ScannerProps {
  onFoodDetected: (food: Food) => void;
  onClose: () => void;
}

export default function Scanner({ onFoodDetected, onClose }: ScannerProps) {
  const [scanMode, setScanMode] = useState<'photo' | 'barcode'>('photo');
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<Food | null>(null);

  // Simulação de scanner (em produção, integraria com API de visão computacional)
  const simulateScan = () => {
    setIsScanning(true);
    setResult(null);

    setTimeout(() => {
      // Simula detecção aleatória de alimento
      const randomFood = foodDatabase[Math.floor(Math.random() * foodDatabase.length)];
      setResult(randomFood);
      setIsScanning(false);
    }, 2000);
  };

  const handleConfirm = () => {
    if (result) {
      onFoodDetected(result);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">Scanner de Alimentos</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-purple-50">Escaneie por foto ou código de barras</p>
        </div>

        {/* Mode Selector */}
        <div className="p-4 border-b">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setScanMode('photo')}
              className={`p-4 rounded-xl font-medium transition-all ${
                scanMode === 'photo'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Camera className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm">Foto</span>
            </button>
            <button
              onClick={() => setScanMode('barcode')}
              className={`p-4 rounded-xl font-medium transition-all ${
                scanMode === 'barcode'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Barcode className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm">Código</span>
            </button>
          </div>
        </div>

        {/* Scanner Area */}
        <div className="p-6">
          {!isScanning && !result && (
            <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-purple-300">
              <div className="p-6 bg-white rounded-full shadow-lg mb-4">
                {scanMode === 'photo' ? (
                  <Camera className="w-12 h-12 text-purple-500" />
                ) : (
                  <Barcode className="w-12 h-12 text-purple-500" />
                )}
              </div>
              <p className="text-gray-600 text-center mb-6">
                {scanMode === 'photo'
                  ? 'Tire uma foto do alimento'
                  : 'Escaneie o código de barras'}
              </p>
              <button
                onClick={simulateScan}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Scan className="w-5 h-5" />
                Iniciar Escaneamento
              </button>
            </div>
          )}

          {isScanning && (
            <div className="aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl flex flex-col items-center justify-center">
              <Loader2 className="w-16 h-16 text-purple-500 animate-spin mb-4" />
              <p className="text-gray-600 font-medium">Analisando...</p>
              <p className="text-sm text-gray-500 mt-2">Identificando alimento</p>
            </div>
          )}

          {result && (
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border-2 border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-emerald-500 rounded-xl">
                    <Scan className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-emerald-600 font-medium">Alimento Detectado</p>
                    <p className="text-xs text-emerald-500">Confirme as informações</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{result.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-sm text-gray-600">Porção</p>
                    <p className="text-lg font-bold text-gray-900">{result.portion}</p>
                  </div>
                  <div className="bg-white rounded-xl p-3">
                    <p className="text-sm text-gray-600">Pontos</p>
                    <p className="text-2xl font-bold text-emerald-600">{result.points}</p>
                  </div>
                </div>

                {result.calories && (
                  <div className="bg-white rounded-xl p-3 mt-3">
                    <p className="text-sm text-gray-600">Calorias</p>
                    <p className="text-lg font-bold text-gray-900">{result.calories} kcal</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={simulateScan}
                  className="py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  Escanear Novamente
                </button>
                <button
                  onClick={handleConfirm}
                  className="py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Confirmar
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4 bg-purple-50 border-t">
          <p className="text-sm text-gray-600 text-center">
            💡 <span className="font-medium">Dica:</span> Para melhores resultados, tire fotos com boa iluminação
          </p>
        </div>
      </div>
    </div>
  );
}
