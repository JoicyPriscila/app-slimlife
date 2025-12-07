// Suprimir erros conhecidos de HMR e fetch durante desenvolvimento
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalError = console.error;
  const originalWarn = console.warn;

  console.error = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    
    // Lista de erros a suprimir
    const suppressPatterns = [
      'Failed to fetch',
      'Network Failed',
      'GET undefined',
      'hmrRefreshReducerImpl',
      'fetchServerResponse',
      'lasy-bridge.js',
    ];

    // Verificar se deve suprimir
    const shouldSuppress = suppressPatterns.some(pattern => 
      message.includes(pattern)
    );

    if (!shouldSuppress) {
      originalError.apply(console, args);
    }
  };

  console.warn = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    
    // Lista de warnings a suprimir
    const suppressPatterns = [
      'Failed to fetch',
      'Network Failed',
      'Variáveis de ambiente do Supabase não configuradas',
    ];

    // Verificar se deve suprimir
    const shouldSuppress = suppressPatterns.some(pattern => 
      message.includes(pattern)
    );

    if (!shouldSuppress) {
      originalWarn.apply(console, args);
    }
  };
}

export {};
