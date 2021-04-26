import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesListService {

  selectedRecipe = new BehaviorSubject<any>({});

  constructor() { }

  recipeList: Array<any> = [
    {
      Name: 'One-pan veggie English breakfast',
      Rating: 3,
      Image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one-pan_veggie_english_31012_16x9.jpg',
      Description: 'A bed of crisp grated potatoes is topped with eggs, cherry tomatoes and mushrooms and then baked in the oven for an easy breakfast or brunch.',
      Ingredients: [
        '1 large baking potato',
        '30g / 1oz unsalted butter',
        '225g / 8oz chestnut mushrooms, quartered',
        '150g / 5½oz cherry tomatoes, halved',
        '4 large free - range eggs',
        'sea salt and freshly ground black pepper',
        'small handful fresh flatleaf parsley, roughly chopped, to garnish',
        'hot chilli sauce, to serve(optional)'
      ],
      Steps: [
        'Preheat the oven to 220C / 200C Fan / Gas 7. Grate the potato(don’t bother peeling it) on the largest hole of your box grater.Place in a large sieve and rinse under the cold tap until the liquid runs clear.Set aside to drain.',
        'Heat half the butter in a large, shallow ovenproof casserole over a medium–high heat.Gently fry the mushrooms for 5 minutes, or until just cooked.Remove from the pan with a slotted spoon and set aside.',
        'Melt the remaining butter in the pan.Once it has started to froth, add the potato and lots of salt and pepper.Cook for about 10 minutes, or until all the liquid has evaporated and the potato is starting to colour.Spread the potato in an even layer in the casserole and place in the oven for 10 minutes.',
        'Scatter the tomatoes over the potato, then return to the oven for 5 minutes.',
        'Remove the pan from the oven and sprinkle over the mushrooms.Make four shallow wells in the potato mixture and crack in the eggs.Return to the oven for 6–8 minutes, or until the egg whites are just set and the yolks are still runny.',
        'Garnish with the parsley and serve with chilli sauce if you like.'
      ],
      CompletedSteps: []
    },
    {
      Name: 'Loaded Breakfast Skillet',
      Rating: 5,
      Image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6548876.jpg',
      Description: 'Potatoes, bacon, onions, eggs, and shredded cheese make a hearty and delicious breakfast or brunch dish.',
      Ingredients: [
        '4 slices bacon, cut into 1 - inch pieces',
        '1 onion, chopped',
        '3 russet potatoes, scrubbed, chopped into 3 / 4 - inch cubes',
        '¼ cup water',
        '2 green onions, sliced',
        '2 cloves garlic, minced',
        '½ teaspoon smoked paprika',
        'kosher salt and freshly ground pepper to taste',
        '4 eggs',
        '1 cup shredded Cheddar cheese'
      ],
      Steps: [
        'Place bacon in a large skillet and cook over medium-high heat, turning occasionally, until crispy, 5 to 8 minutes. Drain on paper towels; reserve most of the bacon fat in skillet.',
        'Reduce heat to medium. Cook and stir onions until starting to soften, about 5 minutes. Add potatoes; toss to coat evenly in bacon fat. Pour in water and cover skillet with a large lid. Cook, checking occasionally, until potatoes are tender, about 20 minutes. Add green onions, garlic, and paprika. Season with salt and pepper.',
        'Make 4 wells in the potato mixture using a wooden spoon, revealing the bottom of the skillet. Crack an egg into each well; season with salt and pepper. Sprinkle cooked bacon and Cheddar cheese over the entire skillet. Replace lid; cook until egg whites are set and yolks are still runny, about 5 minutes.'
      ],
      CompletedSteps: []
    }, {
      Name: 'One-pan veggie English breakfast',
      Rating: 3,
      Image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one-pan_veggie_english_31012_16x9.jpg',
      Description: 'A bed of crisp grated potatoes is topped with eggs, cherry tomatoes and mushrooms and then baked in the oven for an easy breakfast or brunch.',
      Ingredients: [
        '1 large baking potato',
        '30g / 1oz unsalted butter',
        '225g / 8oz chestnut mushrooms, quartered',
        '150g / 5½oz cherry tomatoes, halved',
        '4 large free - range eggs',
        'sea salt and freshly ground black pepper',
        'small handful fresh flatleaf parsley, roughly chopped, to garnish',
        'hot chilli sauce, to serve(optional)'
      ],
      Steps: [
        'Preheat the oven to 220C / 200C Fan / Gas 7. Grate the potato(don’t bother peeling it) on the largest hole of your box grater.Place in a large sieve and rinse under the cold tap until the liquid runs clear.Set aside to drain.',
        'Heat half the butter in a large, shallow ovenproof casserole over a medium–high heat.Gently fry the mushrooms for 5 minutes, or until just cooked.Remove from the pan with a slotted spoon and set aside.',
        'Melt the remaining butter in the pan.Once it has started to froth, add the potato and lots of salt and pepper.Cook for about 10 minutes, or until all the liquid has evaporated and the potato is starting to colour.Spread the potato in an even layer in the casserole and place in the oven for 10 minutes.',
        'Scatter the tomatoes over the potato, then return to the oven for 5 minutes.',
        'Remove the pan from the oven and sprinkle over the mushrooms.Make four shallow wells in the potato mixture and crack in the eggs.Return to the oven for 6–8 minutes, or until the egg whites are just set and the yolks are still runny.',
        'Garnish with the parsley and serve with chilli sauce if you like.'
      ],
      CompletedSteps: []
    },
    {
      Name: 'Loaded Breakfast Skillet',
      Rating: 5,
      Image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6548876.jpg',
      Description: 'Potatoes, bacon, onions, eggs, and shredded cheese make a hearty and delicious breakfast or brunch dish.',
      Ingredients: [
        '4 slices bacon, cut into 1 - inch pieces',
        '1 onion, chopped',
        '3 russet potatoes, scrubbed, chopped into 3 / 4 - inch cubes',
        '¼ cup water',
        '2 green onions, sliced',
        '2 cloves garlic, minced',
        '½ teaspoon smoked paprika',
        'kosher salt and freshly ground pepper to taste',
        '4 eggs',
        '1 cup shredded Cheddar cheese'
      ],
      Steps: [
        'Place bacon in a large skillet and cook over medium-high heat, turning occasionally, until crispy, 5 to 8 minutes. Drain on paper towels; reserve most of the bacon fat in skillet.',
        'Reduce heat to medium. Cook and stir onions until starting to soften, about 5 minutes. Add potatoes; toss to coat evenly in bacon fat. Pour in water and cover skillet with a large lid. Cook, checking occasionally, until potatoes are tender, about 20 minutes. Add green onions, garlic, and paprika. Season with salt and pepper.',
        'Make 4 wells in the potato mixture using a wooden spoon, revealing the bottom of the skillet. Crack an egg into each well; season with salt and pepper. Sprinkle cooked bacon and Cheddar cheese over the entire skillet. Replace lid; cook until egg whites are set and yolks are still runny, about 5 minutes.'
      ],
      CompletedSteps: []
    }, {
      Name: 'One-pan veggie English breakfast',
      Rating: 3,
      Image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/one-pan_veggie_english_31012_16x9.jpg',
      Description: 'A bed of crisp grated potatoes is topped with eggs, cherry tomatoes and mushrooms and then baked in the oven for an easy breakfast or brunch.',
      Ingredients: [
        '1 large baking potato',
        '30g / 1oz unsalted butter',
        '225g / 8oz chestnut mushrooms, quartered',
        '150g / 5½oz cherry tomatoes, halved',
        '4 large free - range eggs',
        'sea salt and freshly ground black pepper',
        'small handful fresh flatleaf parsley, roughly chopped, to garnish',
        'hot chilli sauce, to serve(optional)'
      ],
      Steps: [
        'Preheat the oven to 220C / 200C Fan / Gas 7. Grate the potato(don’t bother peeling it) on the largest hole of your box grater.Place in a large sieve and rinse under the cold tap until the liquid runs clear.Set aside to drain.',
        'Heat half the butter in a large, shallow ovenproof casserole over a medium–high heat.Gently fry the mushrooms for 5 minutes, or until just cooked.Remove from the pan with a slotted spoon and set aside.',
        'Melt the remaining butter in the pan.Once it has started to froth, add the potato and lots of salt and pepper.Cook for about 10 minutes, or until all the liquid has evaporated and the potato is starting to colour.Spread the potato in an even layer in the casserole and place in the oven for 10 minutes.',
        'Scatter the tomatoes over the potato, then return to the oven for 5 minutes.',
        'Remove the pan from the oven and sprinkle over the mushrooms.Make four shallow wells in the potato mixture and crack in the eggs.Return to the oven for 6–8 minutes, or until the egg whites are just set and the yolks are still runny.',
        'Garnish with the parsley and serve with chilli sauce if you like.'
      ],
      CompletedSteps: []
    },
    {
      Name: 'Loaded Breakfast Skillet',
      Rating: 5,
      Image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6548876.jpg',
      Description: 'Potatoes, bacon, onions, eggs, and shredded cheese make a hearty and delicious breakfast or brunch dish.',
      Ingredients: [
        '4 slices bacon, cut into 1 - inch pieces',
        '1 onion, chopped',
        '3 russet potatoes, scrubbed, chopped into 3 / 4 - inch cubes',
        '¼ cup water',
        '2 green onions, sliced',
        '2 cloves garlic, minced',
        '½ teaspoon smoked paprika',
        'kosher salt and freshly ground pepper to taste',
        '4 eggs',
        '1 cup shredded Cheddar cheese'
      ],
      Steps: [
        'Place bacon in a large skillet and cook over medium-high heat, turning occasionally, until crispy, 5 to 8 minutes. Drain on paper towels; reserve most of the bacon fat in skillet.',
        'Reduce heat to medium. Cook and stir onions until starting to soften, about 5 minutes. Add potatoes; toss to coat evenly in bacon fat. Pour in water and cover skillet with a large lid. Cook, checking occasionally, until potatoes are tender, about 20 minutes. Add green onions, garlic, and paprika. Season with salt and pepper.',
        'Make 4 wells in the potato mixture using a wooden spoon, revealing the bottom of the skillet. Crack an egg into each well; season with salt and pepper. Sprinkle cooked bacon and Cheddar cheese over the entire skillet. Replace lid; cook until egg whites are set and yolks are still runny, about 5 minutes.'
      ],
      CompletedSteps: []
    },
  ]
}
