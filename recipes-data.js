// Recipe Data
const recipes = [
  {
    id: '1',
    title: 'Healthy Breakfast Bowl',
    image: 'https://images.unsplash.com/photo-1564093497595-593b96d80180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    prepTime: '10 min',
    cookTime: '5 min',
    totalTime: '15 min',
    servings: 2,
    difficulty: 'Easy',
    category: 'Breakfast',
    description: 'Start your day right with this nutritious and colorful breakfast bowl packed with fresh fruits, granola, and yogurt.',
    ingredients: [
      '2 cups Greek yogurt',
      '1 cup granola',
      '1 banana, sliced',
      '1/2 cup blueberries',
      '1/2 cup strawberries, sliced',
      '2 tbsp honey',
      '2 tbsp chia seeds',
      'Fresh mint leaves for garnish'
    ],
    instructions: [
      'Divide Greek yogurt evenly between two bowls.',
      'Top each bowl with granola, creating a base.',
      'Arrange sliced bananas, blueberries, and strawberries on top.',
      'Drizzle with honey and sprinkle chia seeds over the fruit.',
      'Garnish with fresh mint leaves.',
      'Serve immediately and enjoy!'
    ],
    tips: [
      'Use overnight oats instead of granola for a gluten-free option',
      'Add a tablespoon of almond butter for extra protein',
      'Substitute honey with maple syrup for a vegan version'
    ],
    nutrition: 'Nutritional values are approximate and may vary based on ingredients used.'
  },
  {
    id: '2',
    title: 'Classic Italian Pasta',
    image: 'https://images.unsplash.com/photo-1766706519060-d44bd9dc50f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    prepTime: '15 min',
    cookTime: '20 min',
    totalTime: '35 min',
    servings: 4,
    difficulty: 'Medium',
    category: 'Dinner',
    description: 'A restaurant-quality pasta dish with rich tomato sauce, fresh basil, and perfectly al dente pasta.',
    ingredients: [
      '1 lb pasta (penne or spaghetti)',
      '2 tbsp olive oil',
      '4 cloves garlic, minced',
      '1 can (28 oz) crushed tomatoes',
      '1/4 cup fresh basil, chopped',
      '1 tsp dried oregano',
      'Salt and pepper to taste',
      '1/2 cup parmesan cheese, grated',
      'Red pepper flakes (optional)'
    ],
    instructions: [
      'Bring a large pot of salted water to boil and cook pasta according to package directions.',
      'While pasta cooks, heat olive oil in a large skillet over medium heat.',
      'Add minced garlic and sauté for 1 minute until fragrant.',
      'Pour in crushed tomatoes, oregano, salt, and pepper. Simmer for 15 minutes.',
      'Drain pasta and add to the sauce, tossing to coat evenly.',
      'Stir in fresh basil and remove from heat.',
      'Serve hot, topped with parmesan cheese and red pepper flakes if desired.'
    ],
    tips: [
      'Reserve 1 cup of pasta water to adjust sauce consistency',
      'Use San Marzano tomatoes for authentic Italian flavor',
      'Add Italian sausage or ground beef for a heartier meal'
    ],
    nutrition: 'Nutritional values are approximate and may vary based on ingredients used.'
  },
  {
    id: '3',
    title: 'Decadent Chocolate Cake',
    image: 'https://images.unsplash.com/photo-1736840334919-aac2d5af73e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    prepTime: '20 min',
    cookTime: '35 min',
    totalTime: '55 min',
    servings: 8,
    difficulty: 'Medium',
    category: 'Desserts',
    description: 'Rich, moist chocolate cake with a silky chocolate ganache frosting. Perfect for celebrations or whenever you need a chocolate fix.',
    ingredients: [
      '2 cups all-purpose flour',
      '2 cups sugar',
      '3/4 cup cocoa powder',
      '2 tsp baking soda',
      '1 tsp baking powder',
      '1 tsp salt',
      '2 eggs',
      '1 cup buttermilk',
      '1 cup strong black coffee, cooled',
      '1/2 cup vegetable oil',
      '1 tsp vanilla extract',
      'For ganache: 1 cup heavy cream, 2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
      'In a large bowl, combine flour, sugar, cocoa, baking soda, baking powder, and salt.',
      'Add eggs, buttermilk, coffee, oil, and vanilla. Beat on medium speed for 2 minutes.',
      'Pour batter evenly into prepared pans.',
      'Bake for 30-35 minutes, or until a toothpick inserted comes out clean.',
      'Cool in pans for 10 minutes, then turn out onto wire racks.',
      'For ganache: heat cream until simmering, pour over chocolate chips, let sit 5 minutes, then stir until smooth.',
      'Once cakes are completely cool, frost with chocolate ganache.'
    ],
    tips: [
      'Coffee enhances the chocolate flavor but won\'t taste like coffee',
      'Let cakes cool completely before frosting to prevent melting',
      'Store in an airtight container at room temperature for up to 3 days'
    ],
    nutrition: 'Nutritional values are approximate and may vary based on ingredients used.'
  },
  {
    id: '4',
    title: 'Fresh Garden Salad',
    image: 'https://images.unsplash.com/photo-1734989175071-fedc119fb52e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    prepTime: '15 min',
    cookTime: '0 min',
    totalTime: '15 min',
    servings: 4,
    difficulty: 'Easy',
    category: 'Healthy',
    description: 'Crisp, refreshing salad loaded with fresh vegetables and a tangy homemade vinaigrette.',
    ingredients: [
      '6 cups mixed salad greens',
      '1 cucumber, sliced',
      '2 tomatoes, diced',
      '1 red onion, thinly sliced',
      '1 bell pepper, chopped',
      '1/2 cup feta cheese, crumbled',
      '1/4 cup olive oil',
      '2 tbsp balsamic vinegar',
      '1 tsp Dijon mustard',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Wash and dry all vegetables thoroughly.',
      'In a large salad bowl, combine mixed greens, cucumber, tomatoes, red onion, and bell pepper.',
      'In a small bowl, whisk together olive oil, balsamic vinegar, Dijon mustard, salt, and pepper.',
      'Drizzle dressing over salad just before serving.',
      'Top with crumbled feta cheese.',
      'Toss gently and serve immediately.'
    ],
    tips: [
      'Add grilled chicken or shrimp for extra protein',
      'Prepare dressing up to 3 days in advance and store in refrigerator',
      'Add avocado, nuts, or seeds for more texture and nutrients'
    ],
    nutrition: 'Nutritional values are approximate and may vary based on ingredients used.'
  },
  {
    id: '5',
    title: 'Grilled Chicken Dinner',
    image: 'https://images.unsplash.com/photo-1496074620649-6b1b02e5c1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    prepTime: '10 min',
    cookTime: '25 min',
    totalTime: '35 min',
    servings: 4,
    difficulty: 'Easy',
    category: 'Dinner',
    description: 'Juicy, perfectly seasoned grilled chicken breast with a golden-brown exterior and tender, flavorful interior.',
    ingredients: [
      '4 boneless, skinless chicken breasts',
      '3 tbsp olive oil',
      '2 cloves garlic, minced',
      '1 tsp paprika',
      '1 tsp dried thyme',
      '1 tsp onion powder',
      'Salt and pepper to taste',
      'Fresh lemon wedges for serving',
      'Fresh parsley, chopped'
    ],
    instructions: [
      'In a small bowl, combine olive oil, garlic, paprika, thyme, onion powder, salt, and pepper.',
      'Pat chicken breasts dry and brush marinade all over them.',
      'Let marinate for at least 15 minutes, or up to 2 hours in the refrigerator.',
      'Preheat grill to medium-high heat (375-400°F).',
      'Place chicken on grill and cook for 6-8 minutes per side, until internal temperature reaches 165°F.',
      'Remove from grill and let rest for 5 minutes.',
      'Garnish with fresh parsley and serve with lemon wedges.'
    ],
    tips: [
      'Pound chicken to even thickness for uniform cooking',
      'Don\'t flip chicken too often - let it develop a nice char',
      'Use a meat thermometer to ensure perfect doneness'
    ],
    nutrition: 'Nutritional values are approximate and may vary based on ingredients used.'
  },
  {
    id: '6',
    title: 'Colorful Vegan Bowl',
    image: 'https://images.unsplash.com/photo-1681330266932-391fd00f805f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    prepTime: '20 min',
    cookTime: '30 min',
    totalTime: '50 min',
    servings: 2,
    difficulty: 'Medium',
    category: 'Vegan',
    description: 'A vibrant, nutrient-packed vegan bowl with roasted vegetables, quinoa, and creamy tahini dressing.',
    ingredients: [
      '1 cup quinoa, cooked',
      '1 sweet potato, cubed',
      '1 cup chickpeas, drained',
      '2 cups kale, chopped',
      '1 avocado, sliced',
      '1/4 cup tahini',
      '2 tbsp lemon juice',
      '2 tbsp olive oil',
      'Salt, pepper, and cumin to taste'
    ],
    instructions: [
      'Preheat oven to 400°F (200°C).',
      'Toss sweet potato cubes and chickpeas with olive oil, salt, pepper, and cumin.',
      'Spread on a baking sheet and roast for 25-30 minutes until golden.',
      'Meanwhile, cook quinoa according to package directions.',
      'Massage kale with a bit of olive oil to soften.',
      'In a small bowl, whisk together tahini, lemon juice, and 2-3 tbsp water until smooth.',
      'Assemble bowls: divide quinoa, roasted vegetables, chickpeas, kale, and avocado.',
      'Drizzle with tahini dressing and serve.'
    ],
    tips: [
      'Meal prep by roasting vegetables in advance',
      'Add hemp seeds or nutritional yeast for extra nutrients',
      'Customize with your favorite vegetables'
    ],
    nutrition: 'Nutritional values are approximate and may vary based on ingredients used.'
  },
  {
    id: '7',
    title: 'Fluffy Pancake Stack',
    image: 'https://images.unsplash.com/photo-1668507740203-0654d38b6201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    prepTime: '10 min',
    cookTime: '15 min',
    totalTime: '25 min',
    servings: 4,
    difficulty: 'Easy',
    category: 'Breakfast',
    description: 'Light, fluffy pancakes perfect for a weekend breakfast. Serve with maple syrup and fresh berries.',
    ingredients: [
      '2 cups all-purpose flour',
      '2 tbsp sugar',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '2 eggs',
      '1 3/4 cups milk',
      '1/4 cup melted butter',
      '1 tsp vanilla extract',
      'Butter for cooking',
      'Maple syrup and berries for serving'
    ],
    instructions: [
      'In a large bowl, whisk together flour, sugar, baking powder, and salt.',
      'In another bowl, beat eggs, then add milk, melted butter, and vanilla.',
      'Pour wet ingredients into dry ingredients and stir until just combined (batter should be slightly lumpy).',
      'Heat a griddle or large skillet over medium heat and grease lightly with butter.',
      'Pour 1/4 cup batter for each pancake onto the griddle.',
      'Cook until bubbles form on surface and edges look set, about 2-3 minutes.',
      'Flip and cook until golden brown on the other side, about 1-2 minutes.',
      'Serve warm with maple syrup, butter, and fresh berries.'
    ],
    tips: [
      'Don\'t overmix the batter - lumps are okay',
      'Let batter rest for 5 minutes before cooking for fluffier pancakes',
      'Keep finished pancakes warm in a 200°F oven while cooking the rest'
    ],
    nutrition: 'Nutritional values are approximate and may vary based on ingredients used.'
  },
  {
    id: '8',
    title: 'Berry Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1594497523022-e4d56a881497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    prepTime: '10 min',
    cookTime: '0 min',
    totalTime: '10 min',
    servings: 2,
    difficulty: 'Easy',
    category: 'Breakfast',
    description: 'A thick, creamy smoothie bowl topped with fresh fruits, nuts, and seeds for a nutritious breakfast or snack.',
    ingredients: [
      '2 frozen bananas',
      '1 cup frozen mixed berries',
      '1/2 cup Greek yogurt',
      '1/4 cup almond milk',
      '1 tbsp honey',
      'Toppings: granola, fresh berries, coconut flakes, chia seeds, sliced almonds'
    ],
    instructions: [
      'Add frozen bananas, berries, Greek yogurt, almond milk, and honey to a blender.',
      'Blend on high until smooth and thick (add more milk if needed, but keep it thick).',
      'Pour into bowls.',
      'Arrange toppings in sections: granola, fresh berries, coconut flakes, chia seeds, and almonds.',
      'Serve immediately with a spoon.'
    ],
    tips: [
      'Use frozen fruit for a thicker, ice cream-like consistency',
      'Add a scoop of protein powder for post-workout fuel',
      'Get creative with toppings based on your preferences'
    ],
    nutrition: 'Nutritional values are approximate and may vary based on ingredients used.'
  },
  {
    id: '9',
    title: 'Perfect Grilled Steak',
    image: 'https://images.unsplash.com/photo-1626203313658-886791f37e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    prepTime: '10 min',
    cookTime: '15 min',
    totalTime: '25 min',
    servings: 2,
    difficulty: 'Medium',
    category: 'Dinner',
    description: 'Juicy, flavorful ribeye steak grilled to perfection with a beautiful crust and tender interior.',
    ingredients: [
      '2 ribeye steaks (1-inch thick)',
      '2 tbsp olive oil',
      'Coarse salt',
      'Freshly ground black pepper',
      '4 cloves garlic, crushed',
      '4 sprigs fresh thyme',
      '2 tbsp butter'
    ],
    instructions: [
      'Remove steaks from refrigerator 30 minutes before cooking to bring to room temperature.',
      'Pat steaks dry and rub with olive oil. Season generously with salt and pepper.',
      'Preheat grill to high heat (450-500°F).',
      'Place steaks on grill and cook for 4-5 minutes without moving.',
      'Flip steaks and add crushed garlic and thyme to the grill.',
      'Cook for another 4-5 minutes for medium-rare (internal temp 130-135°F).',
      'Remove from grill, top with butter, and let rest for 5-10 minutes.',
      'Slice against the grain and serve.'
    ],
    tips: [
      'Let steak come to room temperature for even cooking',
      'Don\'t skip the resting time - it keeps the juices in',
      'Use a meat thermometer for perfect doneness every time'
    ],
    nutrition: 'Nutritional values are approximate and may vary based on ingredients used.'
  },
  {
    id: '10',
    title: 'Authentic Tacos',
    image: 'https://images.unsplash.com/photo-1707604341704-74abdc25e52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    prepTime: '15 min',
    cookTime: '15 min',
    totalTime: '30 min',
    servings: 4,
    difficulty: 'Easy',
    category: 'Quick Meals',
    description: 'Delicious, authentic-style tacos with seasoned beef, fresh toppings, and warm tortillas.',
    ingredients: [
      '1 lb ground beef',
      '8 small corn tortillas',
      '1 onion, diced',
      '2 cloves garlic, minced',
      '2 tsp chili powder',
      '1 tsp cumin',
      '1/2 tsp paprika',
      'Salt and pepper to taste',
      'Toppings: diced tomatoes, lettuce, cheese, sour cream, cilantro, lime wedges'
    ],
    instructions: [
      'In a large skillet, cook ground beef over medium-high heat until browned.',
      'Add diced onion and garlic, cook until softened.',
      'Stir in chili powder, cumin, paprika, salt, and pepper.',
      'Add 1/4 cup water and simmer for 5 minutes.',
      'Warm tortillas in a dry skillet or microwave.',
      'Fill each tortilla with seasoned beef.',
      'Top with your choice of toppings: tomatoes, lettuce, cheese, sour cream, cilantro.',
      'Serve with lime wedges on the side.'
    ],
    tips: [
      'Use ground turkey or chicken for a leaner option',
      'Make your own taco seasoning for better flavor',
      'Warm tortillas wrapped in foil in the oven for softer tacos'
    ],
    nutrition: 'Nutritional values are approximate and may vary based on ingredients used.'
  },
  {
    id: '11',
    title: 'Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1707896543317-da87bde75ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    prepTime: '20 min',
    cookTime: '15 min',
    totalTime: '35 min',
    servings: 4,
    difficulty: 'Medium',
    category: 'Dinner',
    description: 'Classic Italian pizza with fresh mozzarella, tomato sauce, and basil on a crispy crust.',
    ingredients: [
      '1 pizza dough (store-bought or homemade)',
      '1/2 cup tomato sauce',
      '8 oz fresh mozzarella, sliced',
      '2 cloves garlic, minced',
      '2 tbsp olive oil',
      'Fresh basil leaves',
      'Salt and pepper to taste',
      'Parmesan cheese for topping'
    ],
    instructions: [
      'Preheat oven to 475°F (245°C). If using a pizza stone, place it in the oven to heat.',
      'Roll out pizza dough on a floured surface to desired thickness.',
      'Transfer to a pizza pan or parchment paper.',
      'Spread tomato sauce evenly over dough, leaving a 1-inch border.',
      'Arrange mozzarella slices on top. Sprinkle with garlic.',
      'Drizzle with olive oil and season with salt and pepper.',
      'Bake for 12-15 minutes until crust is golden and cheese is bubbly.',
      'Remove from oven, top with fresh basil leaves and parmesan.',
      'Slice and serve hot.'
    ],
    tips: [
      'Pre-bake the crust for 5 minutes for an extra crispy base',
      'Use San Marzano tomatoes for authentic flavor',
      'Let dough come to room temperature before stretching'
    ],
    nutrition: 'Nutritional values are approximate and may vary based on ingredients used.'
  },
  {
    id: '12',
    title: 'Gourmet Food Platter',
    image: 'https://images.unsplash.com/photo-1690299564243-9879e2f22654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    prepTime: '30 min',
    cookTime: '0 min',
    totalTime: '30 min',
    servings: 8,
    difficulty: 'Easy',
    category: 'Quick Meals',
    description: 'An impressive charcuterie and cheese board perfect for entertaining guests.',
    ingredients: [
      'Assorted cheeses (cheddar, brie, gouda)',
      'Cured meats (prosciutto, salami, chorizo)',
      'Crackers and breadsticks',
      'Fresh and dried fruits',
      'Nuts (almonds, walnuts)',
      'Olives and pickles',
      'Honey and jam',
      'Fresh herbs for garnish'
    ],
    instructions: [
      'Select a large wooden board or platter.',
      'Arrange cheeses in different areas of the board, some sliced, some whole.',
      'Fold or roll cured meats and place between cheeses.',
      'Add small bowls of olives, pickles, honey, and jam.',
      'Fill gaps with crackers, breadsticks, and fresh fruits.',
      'Scatter nuts throughout the board.',
      'Garnish with fresh herbs like rosemary or thyme.',
      'Serve at room temperature with wine or cocktails.'
    ],
    tips: [
      'Choose cheeses with different textures and flavors',
      'Include both sweet and savory elements',
      'Prepare cheese and meats 30 minutes before serving for best flavor'
    ],
    nutrition: 'Nutritional values are approximate and may vary based on ingredients used.'
  }
];
