// SlimLife - Receitas Brasileiras Saudáveis

import { Recipe } from './types';

export const recipes: Recipe[] = [
  // CAFÉ DA MANHÃ E LANCHES (30 receitas)
  {
    id: 'r1',
    name: 'Omelete de Claras com Espinafre',
    description: 'Omelete leve e nutritivo perfeito para o café da manhã',
    points: 4,
    servings: 1,
    prepTime: '10 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
    ingredients: [
      '3 claras de ovo',
      '1 xícara de espinafre',
      '1 tomate picado',
      'Sal e orégano',
      'Spray de óleo'
    ],
    instructions: [
      'Bata as claras levemente',
      'Adicione o espinafre e tomate',
      'Tempere com sal e orégano',
      'Despeje na frigideira com spray',
      'Cozinhe por 3 minutos de cada lado'
    ]
  },
  {
    id: 'r2',
    name: 'Tapioca Fit de Frango',
    description: 'Tapioca recheada com frango desfiado e tomate',
    points: 6,
    servings: 1,
    prepTime: '15 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
    ingredients: [
      '3 colheres de goma de tapioca',
      '50g de frango desfiado',
      '1 tomate picado',
      'Cebolinha',
      'Sal a gosto'
    ],
    instructions: [
      'Aqueça a frigideira antiaderente',
      'Espalhe a tapioca uniformemente',
      'Quando firmar, adicione o recheio',
      'Dobre ao meio e deixe dourar',
      'Sirva quente'
    ]
  },
  {
    id: 'r3',
    name: 'Panqueca de Banana e Aveia',
    description: 'Panqueca natural sem farinha',
    points: 5,
    servings: 2,
    prepTime: '15 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    ingredients: [
      '2 bananas maduras',
      '2 ovos',
      '3 colheres de aveia',
      'Canela',
      'Mel para servir'
    ],
    instructions: [
      'Amasse as bananas',
      'Misture ovos e aveia',
      'Adicione canela',
      'Frite em frigideira antiaderente',
      'Sirva com mel'
    ]
  },
  {
    id: 'r4',
    name: 'Wrap de Peito de Peru',
    description: 'Wrap leve com vegetais crocantes',
    points: 5,
    servings: 1,
    prepTime: '10 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    ingredients: [
      '1 tortilha integral',
      '4 fatias de peito de peru',
      'Alface',
      'Tomate',
      'Cenoura ralada',
      '1 colher de requeijão light'
    ],
    instructions: [
      'Espalhe o requeijão na tortilha',
      'Adicione as fatias de peru',
      'Coloque os vegetais',
      'Enrole firmemente',
      'Corte ao meio e sirva'
    ]
  },
  {
    id: 'r5',
    name: 'Vitamina Verde Detox',
    description: 'Smoothie energizante e nutritivo',
    points: 3,
    servings: 1,
    prepTime: '5 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop',
    ingredients: [
      '1 folha de couve',
      '1 maçã verde',
      'Suco de 1 limão',
      '200ml de água de coco',
      'Gengibre a gosto'
    ],
    instructions: [
      'Lave bem a couve',
      'Corte a maçã em pedaços',
      'Bata tudo no liquidificador',
      'Coe se preferir',
      'Sirva gelado'
    ]
  },
  {
    id: 'r6',
    name: 'Pão Integral com Pasta de Abacate',
    description: 'Torrada nutritiva e saborosa',
    points: 6,
    servings: 1,
    prepTime: '8 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop',
    ingredients: [
      '2 fatias de pão integral',
      '1/2 abacate',
      '1 tomate cereja',
      'Sal e pimenta',
      'Limão'
    ],
    instructions: [
      'Toste o pão',
      'Amasse o abacate com limão',
      'Espalhe no pão',
      'Adicione tomate fatiado',
      'Tempere e sirva'
    ]
  },
  {
    id: 'r7',
    name: 'Iogurte com Granola e Frutas',
    description: 'Café da manhã completo e balanceado',
    points: 5,
    servings: 1,
    prepTime: '5 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    ingredients: [
      '1 pote de iogurte natural',
      '2 colheres de granola light',
      '5 morangos',
      '1/2 banana',
      '1 colher de mel'
    ],
    instructions: [
      'Coloque o iogurte na tigela',
      'Adicione a granola',
      'Corte as frutas',
      'Decore por cima',
      'Regue com mel'
    ]
  },
  {
    id: 'r8',
    name: 'Crepioca de Queijo',
    description: 'Mix de crepe com tapioca',
    points: 5,
    servings: 1,
    prepTime: '10 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1619740455993-9e4e0e5d3e88?w=400&h=300&fit=crop',
    ingredients: [
      '1 ovo',
      '2 colheres de tapioca',
      '30g de queijo branco',
      'Orégano',
      'Tomate'
    ],
    instructions: [
      'Bata o ovo com a tapioca',
      'Despeje na frigideira',
      'Adicione queijo e tomate',
      'Dobre ao meio',
      'Sirva quente'
    ]
  },
  {
    id: 'r9',
    name: 'Salada de Frutas Tropical',
    description: 'Mix refrescante de frutas brasileiras',
    points: 4,
    servings: 2,
    prepTime: '10 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1564093497595-593b96d80180?w=400&h=300&fit=crop',
    ingredients: [
      '1 manga',
      '1/2 mamão',
      '1 banana',
      '5 morangos',
      'Suco de 1 laranja',
      'Hortelã'
    ],
    instructions: [
      'Corte todas as frutas em cubos',
      'Misture em uma tigela',
      'Regue com suco de laranja',
      'Adicione hortelã picada',
      'Sirva gelado'
    ]
  },
  {
    id: 'r10',
    name: 'Mingau de Aveia com Canela',
    description: 'Café da manhã quentinho e reconfortante',
    points: 4,
    servings: 1,
    prepTime: '10 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&h=300&fit=crop',
    ingredients: [
      '3 colheres de aveia',
      '200ml de leite desnatado',
      'Canela em pó',
      '1 colher de mel',
      'Frutas para decorar'
    ],
    instructions: [
      'Aqueça o leite',
      'Adicione a aveia',
      'Mexa até engrossar',
      'Adicione canela e mel',
      'Decore com frutas'
    ]
  },

  // PRATOS PRINCIPAIS (40 receitas)
  {
    id: 'r11',
    name: 'Frango Grelhado com Legumes',
    description: 'Peito de frango suculento com mix de legumes coloridos',
    points: 8,
    servings: 2,
    prepTime: '25 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop',
    ingredients: [
      '200g de peito de frango',
      '1 abobrinha média',
      '1 cenoura',
      '1 tomate',
      'Temperos a gosto',
      '1 colher de azeite'
    ],
    instructions: [
      'Tempere o frango com sal, alho e limão',
      'Grelhe o frango por 8 minutos de cada lado',
      'Corte os legumes em cubos',
      'Refogue os legumes no azeite por 5 minutos',
      'Sirva o frango com os legumes'
    ]
  },
  {
    id: 'r12',
    name: 'Arroz Integral com Feijão',
    description: 'Dupla brasileira clássica na versão saudável',
    points: 5,
    servings: 2,
    prepTime: '40 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    ingredients: [
      '1 xícara de arroz integral',
      '1 xícara de feijão carioca',
      'Alho e cebola',
      'Louro',
      'Sal a gosto'
    ],
    instructions: [
      'Cozinhe o arroz integral por 30 minutos',
      'Refogue alho e cebola',
      'Adicione o feijão cozido',
      'Tempere com louro e sal',
      'Sirva o arroz com o feijão'
    ]
  },
  {
    id: 'r13',
    name: 'Peixe Assado com Ervas',
    description: 'Filé de peixe aromático e suculento',
    points: 7,
    servings: 2,
    prepTime: '30 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    ingredients: [
      '2 filés de tilápia',
      'Alecrim e tomilho',
      '2 limões',
      'Alho',
      'Azeite'
    ],
    instructions: [
      'Tempere o peixe com ervas e limão',
      'Deixe marinar por 15 minutos',
      'Asse em forno a 180°C por 20 minutos',
      'Regue com azeite',
      'Sirva com legumes'
    ]
  },
  {
    id: 'r14',
    name: 'Strogonoff de Frango Light',
    description: 'Versão saudável do clássico brasileiro',
    points: 9,
    servings: 4,
    prepTime: '35 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop',
    ingredients: [
      '500g de peito de frango',
      '1 cebola',
      '200g de champignon',
      '200ml de creme de leite light',
      '2 colheres de molho de tomate',
      'Mostarda'
    ],
    instructions: [
      'Corte o frango em cubos',
      'Refogue a cebola e o frango',
      'Adicione champignon e molho',
      'Acrescente creme de leite',
      'Sirva com arroz integral'
    ]
  },
  {
    id: 'r15',
    name: 'Omelete de Forno com Vegetais',
    description: 'Omelete fofinho e nutritivo',
    points: 6,
    servings: 3,
    prepTime: '25 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    ingredients: [
      '6 ovos',
      '1 tomate',
      '1 abobrinha',
      'Cebola',
      'Queijo light',
      'Sal e orégano'
    ],
    instructions: [
      'Bata os ovos com sal',
      'Adicione vegetais picados',
      'Despeje em forma untada',
      'Asse a 180°C por 20 minutos',
      'Corte em fatias'
    ]
  },
  {
    id: 'r16',
    name: 'Escondidinho de Frango',
    description: 'Purê de batata doce com frango desfiado',
    points: 8,
    servings: 4,
    prepTime: '45 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop',
    ingredients: [
      '3 batatas doces',
      '300g de frango desfiado',
      '1 tomate',
      'Cebola e alho',
      'Queijo light',
      'Leite desnatado'
    ],
    instructions: [
      'Cozinhe e amasse as batatas',
      'Refogue o frango com temperos',
      'Monte em camadas em refratário',
      'Cubra com queijo',
      'Asse até dourar'
    ]
  },
  {
    id: 'r17',
    name: 'Carne Moída com Legumes',
    description: 'Refogado nutritivo e saboroso',
    points: 7,
    servings: 3,
    prepTime: '30 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
    ingredients: [
      '300g de carne moída magra',
      '1 cenoura',
      '1 abobrinha',
      'Tomate',
      'Cebola e alho',
      'Temperos'
    ],
    instructions: [
      'Refogue a carne com cebola',
      'Adicione legumes picados',
      'Tempere a gosto',
      'Cozinhe por 15 minutos',
      'Sirva com arroz'
    ]
  },
  {
    id: 'r18',
    name: 'Salmão Grelhado com Aspargos',
    description: 'Prato sofisticado e saudável',
    points: 9,
    servings: 2,
    prepTime: '20 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    ingredients: [
      '2 filés de salmão',
      '200g de aspargos',
      'Limão',
      'Azeite',
      'Sal e pimenta'
    ],
    instructions: [
      'Tempere o salmão',
      'Grelhe por 4 minutos cada lado',
      'Cozinhe aspargos no vapor',
      'Regue com azeite e limão',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'r19',
    name: 'Berinjela à Parmegiana Light',
    description: 'Versão leve do clássico italiano',
    points: 7,
    servings: 3,
    prepTime: '40 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?w=400&h=300&fit=crop',
    ingredients: [
      '2 berinjelas',
      'Molho de tomate caseiro',
      'Queijo mussarela light',
      'Orégano',
      'Azeite'
    ],
    instructions: [
      'Corte berinjela em rodelas',
      'Grelhe as fatias',
      'Monte camadas com molho',
      'Cubra com queijo',
      'Asse até gratinar'
    ]
  },
  {
    id: 'r20',
    name: 'Risoto de Cogumelos Light',
    description: 'Risoto cremoso com menos calorias',
    points: 8,
    servings: 3,
    prepTime: '35 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1476124369491-f0ca4e8fea1e?w=400&h=300&fit=crop',
    ingredients: [
      '1 xícara de arroz arbóreo',
      '200g de cogumelos',
      'Caldo de legumes',
      'Cebola',
      'Queijo parmesão light',
      'Vinho branco'
    ],
    instructions: [
      'Refogue cebola e arroz',
      'Adicione vinho',
      'Vá adicionando caldo aos poucos',
      'Acrescente cogumelos',
      'Finalize com queijo'
    ]
  },

  // SALADAS (20 receitas)
  {
    id: 'r21',
    name: 'Salada Tropical Brasileira',
    description: 'Mix refrescante de frutas e folhas verdes',
    points: 3,
    servings: 2,
    prepTime: '15 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    ingredients: [
      '2 xícaras de alface',
      '1 manga picada',
      '1/2 abacaxi em cubos',
      '10 morangos',
      'Suco de 1 limão',
      'Hortelã fresca'
    ],
    instructions: [
      'Lave bem todas as folhas',
      'Corte as frutas em cubos',
      'Misture tudo em uma tigela',
      'Regue com suco de limão',
      'Finalize com hortelã picada'
    ]
  },
  {
    id: 'r22',
    name: 'Salada Caesar Light',
    description: 'Versão saudável do clássico',
    points: 6,
    servings: 2,
    prepTime: '15 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    ingredients: [
      'Alface romana',
      '100g de frango grelhado',
      'Croutons integrais',
      'Parmesão ralado',
      'Molho caesar light'
    ],
    instructions: [
      'Rasgue a alface',
      'Corte o frango em tiras',
      'Misture todos ingredientes',
      'Adicione molho',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'r23',
    name: 'Salada Caprese',
    description: 'Clássico italiano fresco',
    points: 5,
    servings: 2,
    prepTime: '10 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=300&fit=crop',
    ingredients: [
      '2 tomates grandes',
      '200g de mussarela de búfala',
      'Manjericão fresco',
      'Azeite extra virgem',
      'Sal e pimenta'
    ],
    instructions: [
      'Fatie tomates e queijo',
      'Intercale em um prato',
      'Adicione folhas de manjericão',
      'Regue com azeite',
      'Tempere e sirva'
    ]
  },
  {
    id: 'r24',
    name: 'Salada de Quinoa',
    description: 'Salada proteica e nutritiva',
    points: 6,
    servings: 3,
    prepTime: '25 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=300&fit=crop',
    ingredients: [
      '1 xícara de quinoa',
      'Tomate cereja',
      'Pepino',
      'Cebola roxa',
      'Limão',
      'Azeite'
    ],
    instructions: [
      'Cozinhe a quinoa',
      'Deixe esfriar',
      'Pique os vegetais',
      'Misture tudo',
      'Tempere com limão e azeite'
    ]
  },
  {
    id: 'r25',
    name: 'Salada de Grão de Bico',
    description: 'Salada rica em proteínas',
    points: 5,
    servings: 3,
    prepTime: '15 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop',
    ingredients: [
      '1 lata de grão de bico',
      'Tomate',
      'Pepino',
      'Cebola',
      'Salsinha',
      'Limão e azeite'
    ],
    instructions: [
      'Escorra o grão de bico',
      'Pique todos vegetais',
      'Misture em tigela',
      'Tempere com limão',
      'Finalize com azeite'
    ]
  },
  {
    id: 'r26',
    name: 'Salada de Atum',
    description: 'Salada proteica e prática',
    points: 6,
    servings: 2,
    prepTime: '10 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400&h=300&fit=crop',
    ingredients: [
      '1 lata de atum',
      'Alface',
      'Tomate',
      'Milho',
      'Cenoura ralada',
      'Azeite'
    ],
    instructions: [
      'Escorra o atum',
      'Pique os vegetais',
      'Misture tudo',
      'Tempere a gosto',
      'Sirva gelado'
    ]
  },
  {
    id: 'r27',
    name: 'Salada de Rúcula com Morango',
    description: 'Combinação agridoce deliciosa',
    points: 4,
    servings: 2,
    prepTime: '10 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    ingredients: [
      'Rúcula',
      '10 morangos',
      'Nozes',
      'Queijo branco',
      'Vinagre balsâmico',
      'Mel'
    ],
    instructions: [
      'Lave a rúcula',
      'Fatie os morangos',
      'Adicione nozes e queijo',
      'Misture vinagre com mel',
      'Regue a salada'
    ]
  },
  {
    id: 'r28',
    name: 'Salada Mediterrânea',
    description: 'Sabores do mediterrâneo',
    points: 5,
    servings: 2,
    prepTime: '15 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&h=300&fit=crop',
    ingredients: [
      'Alface',
      'Tomate',
      'Pepino',
      'Azeitonas',
      'Queijo feta',
      'Orégano'
    ],
    instructions: [
      'Pique todos vegetais',
      'Adicione azeitonas',
      'Esfarele o queijo feta',
      'Tempere com orégano',
      'Regue com azeite'
    ]
  },
  {
    id: 'r29',
    name: 'Salada de Beterraba',
    description: 'Salada colorida e nutritiva',
    points: 4,
    servings: 2,
    prepTime: '20 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop',
    ingredients: [
      '2 beterrabas',
      'Folhas verdes',
      'Queijo de cabra',
      'Nozes',
      'Vinagre balsâmico'
    ],
    instructions: [
      'Cozinhe e corte beterrabas',
      'Disponha sobre folhas',
      'Adicione queijo e nozes',
      'Regue com vinagre',
      'Sirva'
    ]
  },
  {
    id: 'r30',
    name: 'Salada de Abacate',
    description: 'Salada cremosa e saudável',
    points: 7,
    servings: 2,
    prepTime: '10 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop',
    ingredients: [
      '1 abacate',
      'Tomate cereja',
      'Cebola roxa',
      'Limão',
      'Coentro',
      'Sal'
    ],
    instructions: [
      'Corte abacate em cubos',
      'Adicione tomates',
      'Pique cebola e coentro',
      'Tempere com limão',
      'Misture delicadamente'
    ]
  },

  // SOBREMESAS (20 receitas)
  {
    id: 'r31',
    name: 'Bowl de Açaí Light',
    description: 'Açaí com frutas frescas e granola caseira',
    points: 7,
    servings: 1,
    prepTime: '10 min',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    ingredients: [
      '100g de polpa de açaí',
      '1 banana congelada',
      '5 morangos',
      '2 colheres de granola light',
      '1 colher de mel'
    ],
    instructions: [
      'Bata o açaí com a banana no liquidificador',
      'Despeje em uma tigela',
      'Decore com morangos fatiados',
      'Adicione a granola',
      'Finalize com um fio de mel'
    ]
  },
  {
    id: 'r32',
    name: 'Mousse de Maracujá Light',
    description: 'Sobremesa cremosa e refrescante',
    points: 4,
    servings: 4,
    prepTime: '20 min + geladeira',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
    ingredients: [
      '1 lata de leite condensado light',
      '1 lata de creme de leite light',
      'Polpa de 3 maracujás',
      '1 envelope de gelatina sem sabor'
    ],
    instructions: [
      'Hidrate a gelatina conforme embalagem',
      'Bata todos os ingredientes no liquidificador',
      'Adicione a gelatina dissolvida',
      'Despeje em taças',
      'Leve à geladeira por 4 horas'
    ]
  },
  {
    id: 'r33',
    name: 'Brigadeiro Fit',
    description: 'Versão saudável do doce brasileiro',
    points: 3,
    servings: 10,
    prepTime: '15 min',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    ingredients: [
      '1 lata de leite condensado light',
      '2 colheres de cacau em pó',
      '1 colher de manteiga light',
      'Granulado'
    ],
    instructions: [
      'Misture tudo em panela',
      'Cozinhe mexendo sempre',
      'Deixe esfriar',
      'Enrole em bolinhas',
      'Passe no granulado'
    ]
  },
  {
    id: 'r34',
    name: 'Gelatina com Frutas',
    description: 'Sobremesa leve e colorida',
    points: 2,
    servings: 4,
    prepTime: '10 min + geladeira',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    ingredients: [
      '1 caixa de gelatina diet',
      'Morangos',
      'Kiwi',
      'Uvas',
      'Água'
    ],
    instructions: [
      'Prepare a gelatina',
      'Corte as frutas',
      'Adicione à gelatina morna',
      'Leve à geladeira',
      'Sirva gelado'
    ]
  },
  {
    id: 'r35',
    name: 'Sorvete de Banana',
    description: 'Nice cream natural',
    points: 3,
    servings: 2,
    prepTime: '5 min',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    ingredients: [
      '3 bananas congeladas',
      'Cacau em pó',
      'Canela',
      'Mel'
    ],
    instructions: [
      'Bata bananas no processador',
      'Adicione cacau',
      'Misture bem',
      'Sirva imediatamente',
      'Decore com canela'
    ]
  },
  {
    id: 'r36',
    name: 'Pudim de Chia',
    description: 'Pudim nutritivo e saboroso',
    points: 4,
    servings: 2,
    prepTime: '5 min + geladeira',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop',
    ingredients: [
      '3 colheres de chia',
      '200ml de leite de coco',
      '1 colher de mel',
      'Frutas vermelhas',
      'Baunilha'
    ],
    instructions: [
      'Misture chia com leite',
      'Adicione mel e baunilha',
      'Deixe na geladeira 4h',
      'Decore com frutas',
      'Sirva gelado'
    ]
  },
  {
    id: 'r37',
    name: 'Brownie Fit',
    description: 'Brownie de chocolate saudável',
    points: 5,
    servings: 8,
    prepTime: '30 min',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    ingredients: [
      '2 ovos',
      '3 colheres de cacau',
      '2 bananas',
      '3 colheres de aveia',
      'Chocolate 70%'
    ],
    instructions: [
      'Bata tudo no liquidificador',
      'Despeje em forma',
      'Asse a 180°C por 25 min',
      'Deixe esfriar',
      'Corte em quadrados'
    ]
  },
  {
    id: 'r38',
    name: 'Pavê de Morango Light',
    description: 'Sobremesa em camadas',
    points: 6,
    servings: 6,
    prepTime: '30 min + geladeira',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop',
    ingredients: [
      'Biscoito maisena',
      'Creme de leite light',
      'Leite condensado light',
      'Morangos',
      'Leite desnatado'
    ],
    instructions: [
      'Faça creme com leite condensado',
      'Umedeça biscoitos no leite',
      'Monte camadas',
      'Decore com morangos',
      'Gelar por 4 horas'
    ]
  },
  {
    id: 'r39',
    name: 'Bolo de Cenoura Fit',
    description: 'Bolo fofinho e saudável',
    points: 5,
    servings: 10,
    prepTime: '40 min',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
    ingredients: [
      '2 cenouras',
      '3 ovos',
      '1 xícara de aveia',
      'Adoçante',
      'Fermento'
    ],
    instructions: [
      'Bata cenoura com ovos',
      'Adicione aveia e adoçante',
      'Acrescente fermento',
      'Asse a 180°C por 35 min',
      'Faça cobertura de cacau'
    ]
  },
  {
    id: 'r40',
    name: 'Picolé de Frutas',
    description: 'Picolé natural e refrescante',
    points: 2,
    servings: 6,
    prepTime: '10 min + freezer',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    ingredients: [
      'Morangos',
      'Manga',
      'Água de coco',
      'Mel',
      'Limão'
    ],
    instructions: [
      'Bata frutas com água de coco',
      'Adicione mel',
      'Despeje em forminhas',
      'Congele por 6 horas',
      'Desenforme e sirva'
    ]
  },

  // RECEITAS ADICIONAIS (50 receitas)
  {
    id: 'r41',
    name: 'Sopa de Legumes',
    description: 'Sopa nutritiva e reconfortante',
    points: 4,
    servings: 4,
    prepTime: '30 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    ingredients: [
      'Cenoura',
      'Batata',
      'Abobrinha',
      'Cebola',
      'Alho',
      'Caldo de legumes'
    ],
    instructions: [
      'Refogue cebola e alho',
      'Adicione legumes picados',
      'Cubra com caldo',
      'Cozinhe por 20 minutos',
      'Sirva quente'
    ]
  },
  {
    id: 'r42',
    name: 'Quiche de Espinafre',
    description: 'Torta salgada leve',
    points: 7,
    servings: 6,
    prepTime: '45 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=300&fit=crop',
    ingredients: [
      'Massa integral',
      'Espinafre',
      '3 ovos',
      'Queijo light',
      'Creme de leite light'
    ],
    instructions: [
      'Forre forma com massa',
      'Refogue espinafre',
      'Misture ovos e creme',
      'Monte a quiche',
      'Asse por 35 minutos'
    ]
  },
  {
    id: 'r43',
    name: 'Hambúrguer de Grão de Bico',
    description: 'Hambúrguer vegetariano',
    points: 6,
    servings: 4,
    prepTime: '25 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    ingredients: [
      '1 lata de grão de bico',
      'Cebola',
      'Alho',
      'Aveia',
      'Temperos'
    ],
    instructions: [
      'Amasse o grão de bico',
      'Misture com temperos',
      'Adicione aveia',
      'Modele hambúrgueres',
      'Grelhe ou asse'
    ]
  },
  {
    id: 'r44',
    name: 'Macarrão Integral ao Alho e Óleo',
    description: 'Clássico italiano saudável',
    points: 6,
    servings: 2,
    prepTime: '15 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    ingredients: [
      '200g macarrão integral',
      'Alho',
      'Azeite',
      'Pimenta',
      'Salsinha'
    ],
    instructions: [
      'Cozinhe o macarrão',
      'Doure alho no azeite',
      'Misture macarrão',
      'Adicione pimenta',
      'Finalize com salsinha'
    ]
  },
  {
    id: 'r45',
    name: 'Frittata de Vegetais',
    description: 'Omelete italiana',
    points: 5,
    servings: 3,
    prepTime: '20 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    ingredients: [
      '6 ovos',
      'Pimentão',
      'Tomate',
      'Cebola',
      'Queijo'
    ],
    instructions: [
      'Bata os ovos',
      'Refogue vegetais',
      'Adicione ovos',
      'Cozinhe tampado',
      'Finalize no forno'
    ]
  },
  {
    id: 'r46',
    name: 'Cuscuz Marroquino',
    description: 'Prato árabe nutritivo',
    points: 5,
    servings: 3,
    prepTime: '20 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    ingredients: [
      '1 xícara de cuscuz',
      'Vegetais variados',
      'Grão de bico',
      'Especiarias',
      'Azeite'
    ],
    instructions: [
      'Hidrate o cuscuz',
      'Refogue vegetais',
      'Misture tudo',
      'Tempere',
      'Sirva morno'
    ]
  },
  {
    id: 'r47',
    name: 'Bolinho de Arroz',
    description: 'Aproveitamento criativo',
    points: 4,
    servings: 4,
    prepTime: '20 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
    ingredients: [
      'Arroz cozido',
      '1 ovo',
      'Queijo ralado',
      'Cebolinha',
      'Farinha integral'
    ],
    instructions: [
      'Misture arroz com ovo',
      'Adicione queijo',
      'Modele bolinhos',
      'Passe na farinha',
      'Asse ou frite'
    ]
  },
  {
    id: 'r48',
    name: 'Sanduíche Natural',
    description: 'Lanche prático e saudável',
    points: 5,
    servings: 1,
    prepTime: '10 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop',
    ingredients: [
      'Pão integral',
      'Frango desfiado',
      'Alface',
      'Tomate',
      'Cenoura ralada',
      'Requeijão light'
    ],
    instructions: [
      'Espalhe requeijão no pão',
      'Adicione frango',
      'Coloque vegetais',
      'Feche o sanduíche',
      'Corte ao meio'
    ]
  },
  {
    id: 'r49',
    name: 'Smoothie de Frutas Vermelhas',
    description: 'Bebida antioxidante',
    points: 4,
    servings: 1,
    prepTime: '5 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop',
    ingredients: [
      'Morangos',
      'Framboesas',
      'Mirtilos',
      'Iogurte natural',
      'Mel'
    ],
    instructions: [
      'Bata tudo no liquidificador',
      'Adicione gelo',
      'Ajuste doçura',
      'Sirva gelado',
      'Decore com frutas'
    ]
  },
  {
    id: 'r50',
    name: 'Chips de Batata Doce',
    description: 'Snack crocante e saudável',
    points: 4,
    servings: 2,
    prepTime: '30 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?w=400&h=300&fit=crop',
    ingredients: [
      '2 batatas doces',
      'Azeite',
      'Sal',
      'Páprica',
      'Alecrim'
    ],
    instructions: [
      'Corte batata em fatias finas',
      'Tempere com azeite',
      'Disponha em assadeira',
      'Asse a 180°C por 25 min',
      'Vire na metade'
    ]
  },
  {
    id: 'r51',
    name: 'Barra de Cereal Caseira',
    description: 'Snack energético',
    points: 5,
    servings: 10,
    prepTime: '30 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4cff3e0d?w=400&h=300&fit=crop',
    ingredients: [
      'Aveia',
      'Mel',
      'Castanhas',
      'Frutas secas',
      'Coco ralado'
    ],
    instructions: [
      'Misture ingredientes secos',
      'Aqueça mel',
      'Misture tudo',
      'Comprima em forma',
      'Leve à geladeira'
    ]
  },
  {
    id: 'r52',
    name: 'Pasta de Grão de Bico (Homus)',
    description: 'Patê árabe nutritivo',
    points: 4,
    servings: 6,
    prepTime: '10 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&h=300&fit=crop',
    ingredients: [
      '1 lata de grão de bico',
      'Tahine',
      'Limão',
      'Alho',
      'Azeite',
      'Cominho'
    ],
    instructions: [
      'Bata tudo no processador',
      'Ajuste tempero',
      'Adicione água se necessário',
      'Sirva com vegetais',
      'Regue com azeite'
    ]
  },
  {
    id: 'r53',
    name: 'Muffin de Banana',
    description: 'Bolinho saudável',
    points: 4,
    servings: 8,
    prepTime: '30 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?w=400&h=300&fit=crop',
    ingredients: [
      '3 bananas',
      '2 ovos',
      'Aveia',
      'Canela',
      'Fermento'
    ],
    instructions: [
      'Amasse bananas',
      'Misture ovos e aveia',
      'Adicione fermento',
      'Despeje em forminhas',
      'Asse por 20 minutos'
    ]
  },
  {
    id: 'r54',
    name: 'Água Saborizada',
    description: 'Hidratação com sabor',
    points: 0,
    servings: 1,
    prepTime: '5 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop',
    ingredients: [
      'Água',
      'Limão',
      'Hortelã',
      'Gengibre',
      'Pepino'
    ],
    instructions: [
      'Corte ingredientes',
      'Adicione à água',
      'Deixe na geladeira',
      'Sirva gelado',
      'Reaproveite ingredientes'
    ]
  },
  {
    id: 'r55',
    name: 'Biscoito de Aveia',
    description: 'Cookie saudável',
    points: 3,
    servings: 12,
    prepTime: '25 min',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop',
    ingredients: [
      'Aveia',
      'Banana',
      'Mel',
      'Canela',
      'Passas'
    ],
    instructions: [
      'Amasse banana',
      'Misture com aveia',
      'Adicione mel e canela',
      'Modele biscoitos',
      'Asse por 15 minutos'
    ]
  },
  {
    id: 'r56',
    name: 'Torta de Limão Light',
    description: 'Sobremesa cítrica',
    points: 6,
    servings: 8,
    prepTime: '40 min',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop',
    ingredients: [
      'Biscoito integral',
      'Leite condensado light',
      'Suco de limão',
      'Creme de leite light',
      'Gelatina'
    ],
    instructions: [
      'Faça base com biscoito',
      'Misture recheio',
      'Despeje sobre base',
      'Leve à geladeira',
      'Decore com raspas'
    ]
  },
  {
    id: 'r57',
    name: 'Paleta Mexicana',
    description: 'Picolé de frutas cremoso',
    points: 3,
    servings: 6,
    prepTime: '10 min + freezer',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    ingredients: [
      'Manga',
      'Leite de coco',
      'Mel',
      'Limão'
    ],
    instructions: [
      'Bata manga com leite',
      'Adicione mel',
      'Despeje em formas',
      'Congele',
      'Desenforme'
    ]
  },
  {
    id: 'r58',
    name: 'Creme de Abacate',
    description: 'Sobremesa cremosa brasileira',
    points: 5,
    servings: 3,
    prepTime: '10 min',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&h=300&fit=crop',
    ingredients: [
      '1 abacate',
      'Leite condensado light',
      'Suco de limão',
      'Mel'
    ],
    instructions: [
      'Bata abacate no liquidificador',
      'Adicione leite condensado',
      'Acrescente limão',
      'Sirva gelado',
      'Decore com mel'
    ]
  },
  {
    id: 'r59',
    name: 'Cocada Light',
    description: 'Doce brasileiro tradicional',
    points: 4,
    servings: 10,
    prepTime: '20 min',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
    ingredients: [
      'Coco ralado',
      'Leite condensado light',
      'Leite de coco',
      'Adoçante'
    ],
    instructions: [
      'Misture tudo em panela',
      'Cozinhe mexendo',
      'Despeje em forma',
      'Deixe esfriar',
      'Corte em quadrados'
    ]
  },
  {
    id: 'r60',
    name: 'Frozen Yogurt',
    description: 'Sorvete de iogurte',
    points: 4,
    servings: 4,
    prepTime: '10 min + freezer',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
    ingredients: [
      'Iogurte grego',
      'Frutas vermelhas',
      'Mel',
      'Baunilha'
    ],
    instructions: [
      'Bata iogurte com frutas',
      'Adicione mel',
      'Congele por 4 horas',
      'Mexa a cada hora',
      'Sirva'
    ]
  },
  {
    id: 'r61',
    name: 'Tilápia ao Forno',
    description: 'Peixe assado simples',
    points: 6,
    servings: 2,
    prepTime: '25 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    ingredients: [
      '2 filés de tilápia',
      'Limão',
      'Alho',
      'Tomate',
      'Cebola'
    ],
    instructions: [
      'Tempere o peixe',
      'Disponha em refratário',
      'Cubra com vegetais',
      'Asse por 20 minutos',
      'Sirva'
    ]
  },
  {
    id: 'r62',
    name: 'Almôndegas de Peru',
    description: 'Proteína magra saborosa',
    points: 7,
    servings: 4,
    prepTime: '30 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
    ingredients: [
      '500g carne de peru moída',
      'Cebola',
      'Alho',
      'Ovo',
      'Aveia',
      'Molho de tomate'
    ],
    instructions: [
      'Misture carne com temperos',
      'Adicione ovo e aveia',
      'Modele almôndegas',
      'Cozinhe no molho',
      'Sirva com macarrão'
    ]
  },
  {
    id: 'r63',
    name: 'Lasanha de Berinjela',
    description: 'Lasanha low carb',
    points: 8,
    servings: 6,
    prepTime: '50 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop',
    ingredients: [
      '3 berinjelas',
      'Carne moída',
      'Molho de tomate',
      'Queijo light',
      'Ricota'
    ],
    instructions: [
      'Corte berinjela em fatias',
      'Grelhe as fatias',
      'Prepare molho com carne',
      'Monte camadas',
      'Asse até gratinar'
    ]
  },
  {
    id: 'r64',
    name: 'Wrap de Salmão',
    description: 'Lanche sofisticado',
    points: 7,
    servings: 2,
    prepTime: '15 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    ingredients: [
      'Tortilha integral',
      'Salmão defumado',
      'Cream cheese light',
      'Rúcula',
      'Tomate seco'
    ],
    instructions: [
      'Espalhe cream cheese',
      'Adicione salmão',
      'Coloque rúcula',
      'Enrole firmemente',
      'Corte ao meio'
    ]
  },
  {
    id: 'r65',
    name: 'Salada Niçoise',
    description: 'Salada francesa completa',
    points: 7,
    servings: 2,
    prepTime: '20 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400&h=300&fit=crop',
    ingredients: [
      'Alface',
      'Atum',
      'Ovo cozido',
      'Batata',
      'Vagem',
      'Azeitonas'
    ],
    instructions: [
      'Cozinhe batata e vagem',
      'Disponha alface no prato',
      'Adicione todos ingredientes',
      'Tempere com vinagrete',
      'Sirva'
    ]
  },
  {
    id: 'r66',
    name: 'Caldo Verde',
    description: 'Sopa portuguesa tradicional',
    points: 4,
    servings: 4,
    prepTime: '30 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    ingredients: [
      'Couve',
      'Batata',
      'Cebola',
      'Alho',
      'Linguiça light',
      'Caldo'
    ],
    instructions: [
      'Cozinhe batatas',
      'Amasse as batatas',
      'Adicione couve fatiada',
      'Cozinhe linguiça',
      'Sirva quente'
    ]
  },
  {
    id: 'r67',
    name: 'Panqueca de Espinafre',
    description: 'Panqueca verde nutritiva',
    points: 5,
    servings: 4,
    prepTime: '25 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    ingredients: [
      'Espinafre',
      'Farinha integral',
      'Ovos',
      'Leite',
      'Recheio de frango'
    ],
    instructions: [
      'Bata massa com espinafre',
      'Frite panquecas',
      'Prepare recheio',
      'Recheie e enrole',
      'Sirva com molho'
    ]
  },
  {
    id: 'r68',
    name: 'Salada Waldorf',
    description: 'Salada americana clássica',
    points: 5,
    servings: 3,
    prepTime: '15 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    ingredients: [
      'Maçã',
      'Aipo',
      'Nozes',
      'Uvas passas',
      'Iogurte natural',
      'Alface'
    ],
    instructions: [
      'Corte maçã e aipo',
      'Misture com nozes',
      'Adicione iogurte',
      'Sirva sobre alface',
      'Decore'
    ]
  },
  {
    id: 'r69',
    name: 'Espaguete de Abobrinha',
    description: 'Macarrão de vegetais',
    points: 4,
    servings: 2,
    prepTime: '20 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    ingredients: [
      '3 abobrinhas',
      'Molho de tomate',
      'Alho',
      'Manjericão',
      'Azeite'
    ],
    instructions: [
      'Corte abobrinha em espiral',
      'Refogue rapidamente',
      'Prepare molho',
      'Misture tudo',
      'Sirva imediatamente'
    ]
  },
  {
    id: 'r70',
    name: 'Bolinho de Bacalhau Light',
    description: 'Petisco português saudável',
    points: 5,
    servings: 8,
    prepTime: '40 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
    ingredients: [
      'Bacalhau dessalgado',
      'Batata',
      'Ovo',
      'Cebola',
      'Salsinha'
    ],
    instructions: [
      'Desfie o bacalhau',
      'Amasse batata cozida',
      'Misture tudo',
      'Modele bolinhos',
      'Asse no forno'
    ]
  },
  {
    id: 'r71',
    name: 'Ceviche de Peixe',
    description: 'Prato peruano refrescante',
    points: 6,
    servings: 3,
    prepTime: '30 min + marinada',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    ingredients: [
      'Peixe branco',
      'Limão',
      'Cebola roxa',
      'Coentro',
      'Pimenta'
    ],
    instructions: [
      'Corte peixe em cubos',
      'Marine no limão por 20 min',
      'Adicione cebola',
      'Tempere',
      'Sirva gelado'
    ]
  },
  {
    id: 'r72',
    name: 'Tofu Grelhado',
    description: 'Proteína vegetal versátil',
    points: 5,
    servings: 2,
    prepTime: '25 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    ingredients: [
      'Tofu firme',
      'Shoyu',
      'Gengibre',
      'Alho',
      'Gergelim'
    ],
    instructions: [
      'Corte tofu em fatias',
      'Marine por 15 minutos',
      'Grelhe até dourar',
      'Polvilhe gergelim',
      'Sirva com vegetais'
    ]
  },
  {
    id: 'r73',
    name: 'Salada de Lentilha',
    description: 'Salada proteica',
    points: 5,
    servings: 4,
    prepTime: '30 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop',
    ingredients: [
      'Lentilha',
      'Tomate',
      'Pepino',
      'Cebola',
      'Limão',
      'Hortelã'
    ],
    instructions: [
      'Cozinhe lentilha',
      'Deixe esfriar',
      'Pique vegetais',
      'Misture tudo',
      'Tempere'
    ]
  },
  {
    id: 'r74',
    name: 'Curry de Legumes',
    description: 'Prato indiano aromático',
    points: 6,
    servings: 4,
    prepTime: '35 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    ingredients: [
      'Legumes variados',
      'Leite de coco',
      'Curry em pó',
      'Gengibre',
      'Alho'
    ],
    instructions: [
      'Refogue temperos',
      'Adicione legumes',
      'Acrescente leite de coco',
      'Cozinhe até amolecer',
      'Sirva com arroz'
    ]
  },
  {
    id: 'r75',
    name: 'Bruschetta',
    description: 'Entrada italiana',
    points: 4,
    servings: 4,
    prepTime: '15 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
    ingredients: [
      'Pão italiano',
      'Tomate',
      'Manjericão',
      'Alho',
      'Azeite'
    ],
    instructions: [
      'Toste o pão',
      'Esfregue alho',
      'Pique tomate com manjericão',
      'Coloque sobre pão',
      'Regue com azeite'
    ]
  },
  {
    id: 'r76',
    name: 'Sopa de Abóbora',
    description: 'Sopa cremosa e nutritiva',
    points: 4,
    servings: 4,
    prepTime: '30 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    ingredients: [
      'Abóbora',
      'Cebola',
      'Alho',
      'Caldo de legumes',
      'Gengibre'
    ],
    instructions: [
      'Refogue cebola e alho',
      'Adicione abóbora',
      'Cubra com caldo',
      'Cozinhe até amolecer',
      'Bata no liquidificador'
    ]
  },
  {
    id: 'r77',
    name: 'Falafel Assado',
    description: 'Bolinho árabe no forno',
    points: 6,
    servings: 6,
    prepTime: '35 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1593252719532-347415d8e8e7?w=400&h=300&fit=crop',
    ingredients: [
      'Grão de bico',
      'Cebola',
      'Alho',
      'Coentro',
      'Cominho',
      'Farinha de grão de bico'
    ],
    instructions: [
      'Processe grão de bico',
      'Adicione temperos',
      'Modele bolinhos',
      'Asse por 25 minutos',
      'Sirva com molho'
    ]
  },
  {
    id: 'r78',
    name: 'Salada de Macarrão Integral',
    description: 'Salada fria completa',
    points: 6,
    servings: 4,
    prepTime: '25 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
    ingredients: [
      'Macarrão integral',
      'Tomate cereja',
      'Mussarela',
      'Manjericão',
      'Azeite'
    ],
    instructions: [
      'Cozinhe macarrão',
      'Deixe esfriar',
      'Adicione ingredientes',
      'Tempere',
      'Sirva frio'
    ]
  },
  {
    id: 'r79',
    name: 'Poke Bowl',
    description: 'Bowl havaiano saudável',
    points: 8,
    servings: 2,
    prepTime: '20 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    ingredients: [
      'Arroz integral',
      'Salmão ou atum',
      'Abacate',
      'Edamame',
      'Pepino',
      'Gergelim'
    ],
    instructions: [
      'Cozinhe arroz',
      'Corte peixe em cubos',
      'Monte bowl',
      'Adicione vegetais',
      'Finalize com gergelim'
    ]
  },
  {
    id: 'r80',
    name: 'Tortilha Espanhola Light',
    description: 'Omelete de batata',
    points: 6,
    servings: 4,
    prepTime: '30 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    ingredients: [
      'Batata',
      '6 ovos',
      'Cebola',
      'Azeite',
      'Sal'
    ],
    instructions: [
      'Cozinhe batata em rodelas',
      'Refogue cebola',
      'Bata ovos',
      'Misture tudo',
      'Cozinhe dos dois lados'
    ]
  },
  {
    id: 'r81',
    name: 'Salada Grega',
    description: 'Salada mediterrânea clássica',
    points: 5,
    servings: 3,
    prepTime: '15 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&h=300&fit=crop',
    ingredients: [
      'Tomate',
      'Pepino',
      'Cebola roxa',
      'Azeitonas pretas',
      'Queijo feta',
      'Orégano'
    ],
    instructions: [
      'Corte vegetais em cubos',
      'Adicione azeitonas',
      'Esfarele feta',
      'Tempere com orégano',
      'Regue com azeite'
    ]
  },
  {
    id: 'r82',
    name: 'Caponata',
    description: 'Antepasto siciliano',
    points: 5,
    servings: 6,
    prepTime: '40 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1572441713132-c542fc4fe282?w=400&h=300&fit=crop',
    ingredients: [
      'Berinjela',
      'Tomate',
      'Aipo',
      'Azeitonas',
      'Alcaparras',
      'Vinagre'
    ],
    instructions: [
      'Corte berinjela em cubos',
      'Refogue vegetais',
      'Adicione tomate',
      'Tempere com vinagre',
      'Sirva frio'
    ]
  },
  {
    id: 'r83',
    name: 'Tabule',
    description: 'Salada árabe de trigo',
    points: 5,
    servings: 4,
    prepTime: '30 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&h=300&fit=crop',
    ingredients: [
      'Trigo para quibe',
      'Tomate',
      'Pepino',
      'Hortelã',
      'Salsinha',
      'Limão'
    ],
    instructions: [
      'Hidrate o trigo',
      'Pique vegetais',
      'Misture tudo',
      'Tempere com limão',
      'Deixe descansar'
    ]
  },
  {
    id: 'r84',
    name: 'Ratatouille',
    description: 'Prato francês de legumes',
    points: 5,
    servings: 4,
    prepTime: '45 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
    ingredients: [
      'Berinjela',
      'Abobrinha',
      'Tomate',
      'Pimentão',
      'Cebola',
      'Ervas de provence'
    ],
    instructions: [
      'Corte vegetais em rodelas',
      'Disponha em camadas',
      'Tempere com ervas',
      'Asse por 40 minutos',
      'Sirva quente'
    ]
  },
  {
    id: 'r85',
    name: 'Guacamole',
    description: 'Pasta mexicana de abacate',
    points: 6,
    servings: 4,
    prepTime: '10 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&h=300&fit=crop',
    ingredients: [
      '2 abacates',
      'Tomate',
      'Cebola',
      'Coentro',
      'Limão',
      'Pimenta'
    ],
    instructions: [
      'Amasse abacate',
      'Pique vegetais',
      'Misture tudo',
      'Tempere com limão',
      'Sirva com vegetais'
    ]
  },
  {
    id: 'r86',
    name: 'Salada de Beterraba com Laranja',
    description: 'Combinação agridoce',
    points: 4,
    servings: 3,
    prepTime: '25 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop',
    ingredients: [
      'Beterraba',
      'Laranja',
      'Rúcula',
      'Nozes',
      'Queijo de cabra'
    ],
    instructions: [
      'Cozinhe beterraba',
      'Descasque laranja',
      'Monte sobre rúcula',
      'Adicione nozes e queijo',
      'Tempere'
    ]
  },
  {
    id: 'r87',
    name: 'Carpaccio de Abobrinha',
    description: 'Entrada leve e elegante',
    points: 3,
    servings: 2,
    prepTime: '10 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
    ingredients: [
      'Abobrinha',
      'Limão',
      'Azeite',
      'Parmesão',
      'Rúcula'
    ],
    instructions: [
      'Fatie abobrinha finamente',
      'Disponha no prato',
      'Regue com limão e azeite',
      'Raspe parmesão',
      'Decore com rúcula'
    ]
  },
  {
    id: 'r88',
    name: 'Sopa de Lentilha',
    description: 'Sopa proteica e reconfortante',
    points: 5,
    servings: 4,
    prepTime: '40 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    ingredients: [
      'Lentilha',
      'Cenoura',
      'Aipo',
      'Cebola',
      'Tomate',
      'Cominho'
    ],
    instructions: [
      'Refogue vegetais',
      'Adicione lentilha',
      'Cubra com água',
      'Cozinhe por 30 minutos',
      'Tempere e sirva'
    ]
  },
  {
    id: 'r89',
    name: 'Salada de Repolho (Coleslaw)',
    description: 'Salada americana crocante',
    points: 3,
    servings: 4,
    prepTime: '15 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    ingredients: [
      'Repolho',
      'Cenoura',
      'Iogurte natural',
      'Limão',
      'Mel'
    ],
    instructions: [
      'Rale repolho e cenoura',
      'Misture iogurte com limão',
      'Adicione mel',
      'Misture tudo',
      'Deixe descansar'
    ]
  },
  {
    id: 'r90',
    name: 'Abobrinha Recheada',
    description: 'Legume recheado nutritivo',
    points: 6,
    servings: 3,
    prepTime: '40 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop',
    ingredients: [
      '3 abobrinhas',
      'Carne moída',
      'Tomate',
      'Cebola',
      'Queijo'
    ],
    instructions: [
      'Corte abobrinha ao meio',
      'Retire miolo',
      'Refogue recheio',
      'Recheie abobrinhas',
      'Asse até dourar'
    ]
  },
  {
    id: 'r91',
    name: 'Salada de Frutas com Iogurte',
    description: 'Sobremesa refrescante',
    points: 4,
    servings: 3,
    prepTime: '10 min',
    category: 'sobremesa',
    image: 'https://images.unsplash.com/photo-1564093497595-593b96d80180?w=400&h=300&fit=crop',
    ingredients: [
      'Frutas variadas',
      'Iogurte natural',
      'Mel',
      'Granola',
      'Hortelã'
    ],
    instructions: [
      'Corte frutas',
      'Misture com iogurte',
      'Adicione mel',
      'Polvilhe granola',
      'Decore com hortelã'
    ]
  },
  {
    id: 'r92',
    name: 'Espetinho de Frango',
    description: 'Churrasco saudável',
    points: 7,
    servings: 4,
    prepTime: '30 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop',
    ingredients: [
      'Peito de frango',
      'Pimentão',
      'Cebola',
      'Tomate cereja',
      'Temperos'
    ],
    instructions: [
      'Corte frango em cubos',
      'Tempere bem',
      'Monte espetinhos',
      'Grelhe virando',
      'Sirva quente'
    ]
  },
  {
    id: 'r93',
    name: 'Salada de Pepino',
    description: 'Salada refrescante',
    points: 2,
    servings: 3,
    prepTime: '10 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400&h=300&fit=crop',
    ingredients: [
      'Pepino',
      'Iogurte natural',
      'Hortelã',
      'Alho',
      'Limão'
    ],
    instructions: [
      'Fatie pepino',
      'Misture iogurte com temperos',
      'Adicione pepino',
      'Deixe marinar',
      'Sirva gelado'
    ]
  },
  {
    id: 'r94',
    name: 'Omelete de Cogumelos',
    description: 'Omelete sofisticado',
    points: 5,
    servings: 1,
    prepTime: '15 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
    ingredients: [
      '3 ovos',
      'Cogumelos',
      'Cebola',
      'Queijo',
      'Salsinha'
    ],
    instructions: [
      'Refogue cogumelos',
      'Bata ovos',
      'Despeje na frigideira',
      'Adicione recheio',
      'Dobre e sirva'
    ]
  },
  {
    id: 'r95',
    name: 'Salada de Feijão Branco',
    description: 'Salada proteica',
    points: 5,
    servings: 4,
    prepTime: '15 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop',
    ingredients: [
      'Feijão branco',
      'Tomate',
      'Cebola roxa',
      'Salsinha',
      'Azeite'
    ],
    instructions: [
      'Escorra feijão',
      'Pique vegetais',
      'Misture tudo',
      'Tempere',
      'Sirva'
    ]
  },
  {
    id: 'r96',
    name: 'Wrap Vegetariano',
    description: 'Wrap colorido e nutritivo',
    points: 5,
    servings: 2,
    prepTime: '15 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    ingredients: [
      'Tortilha integral',
      'Homus',
      'Cenoura',
      'Pepino',
      'Alface',
      'Tomate'
    ],
    instructions: [
      'Espalhe homus',
      'Adicione vegetais',
      'Enrole firmemente',
      'Corte ao meio',
      'Sirva'
    ]
  },
  {
    id: 'r97',
    name: 'Creme de Espinafre',
    description: 'Sopa verde nutritiva',
    points: 4,
    servings: 3,
    prepTime: '25 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    ingredients: [
      'Espinafre',
      'Batata',
      'Cebola',
      'Alho',
      'Caldo de legumes'
    ],
    instructions: [
      'Refogue cebola e alho',
      'Adicione espinafre',
      'Acrescente batata',
      'Cozinhe e bata',
      'Sirva cremoso'
    ]
  },
  {
    id: 'r98',
    name: 'Salada de Maçã com Nozes',
    description: 'Salada doce e crocante',
    points: 4,
    servings: 2,
    prepTime: '10 min',
    category: 'salada',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    ingredients: [
      'Maçã',
      'Nozes',
      'Alface',
      'Queijo branco',
      'Mel',
      'Limão'
    ],
    instructions: [
      'Corte maçã',
      'Quebre nozes',
      'Monte sobre alface',
      'Adicione queijo',
      'Regue com mel e limão'
    ]
  },
  {
    id: 'r99',
    name: 'Batata Doce Assada',
    description: 'Acompanhamento nutritivo',
    points: 5,
    servings: 2,
    prepTime: '40 min',
    category: 'principal',
    image: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?w=400&h=300&fit=crop',
    ingredients: [
      '2 batatas doces',
      'Azeite',
      'Alecrim',
      'Sal',
      'Páprica'
    ],
    instructions: [
      'Corte batata em palitos',
      'Tempere com azeite',
      'Adicione especiarias',
      'Asse a 200°C por 35 min',
      'Sirva quente'
    ]
  },
  {
    id: 'r100',
    name: 'Smoothie Bowl',
    description: 'Tigela de vitamina',
    points: 6,
    servings: 1,
    prepTime: '10 min',
    category: 'lanche',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
    ingredients: [
      'Banana congelada',
      'Frutas vermelhas',
      'Leite vegetal',
      'Granola',
      'Coco ralado',
      'Mel'
    ],
    instructions: [
      'Bata frutas com leite',
      'Despeje em tigela',
      'Decore com granola',
      'Adicione coco',
      'Finalize com mel'
    ]
  }
];

export const getRecipesByCategory = (category: Recipe['category']): Recipe[] => {
  return recipes.filter(recipe => recipe.category === category);
};

export const searchRecipes = (query: string): Recipe[] => {
  const lowerQuery = query.toLowerCase();
  return recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(lowerQuery) ||
    recipe.description.toLowerCase().includes(lowerQuery)
  );
};
