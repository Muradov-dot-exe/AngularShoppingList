import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'Pork Shawarma',
      'https://broilkingbbq.com/wp-content/uploads/2020/10/GrilledShawarma_12-LOW.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Bread', 1)]
    ),
    new Recipe(
      'Recipe 2',
      'Chicken Shawarma',
      'https://www.recipetineats.com/wp-content/uploads/2017/01/Chicken-Shawarma-Wrap_3.jpg?resize=650,813',
      [new Ingredient('buns', 2), new Ingredient('sauce', 1)]
    ),
  ];

  constructor(private shoppingList: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingList.addIngredients(ingredients);
  }
}
