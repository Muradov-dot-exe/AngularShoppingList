import { Action } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export enum RecipeActionEnum {
  SET_RECIPES = '[Recipes] Set Recipes',
  FETCH_RECIPES = '[Recipes] Fetch Recipes',
  ADD_RECIPE = '[Recipes] Add Recipe',
  UPDATE_RECIPE = '[Recipes] Update Recipe',
  DELETE_RECIPE = '[Recipes] Delete_Recipe',
  STORE_RECIPES = '[Recipes] Store Recipes',
}

export class SetRecipes implements Action {
  readonly type = RecipeActionEnum.SET_RECIPES;
  constructor(public payload: Recipe[]) {}
}

export class FetchRecipes implements Action {
  readonly type = RecipeActionEnum.FETCH_RECIPES;
}

export class AddRecipe implements Action {
  readonly type = RecipeActionEnum.ADD_RECIPE;
  constructor(public payload: Recipe) {}
}
export class UpdateRecipe implements Action {
  readonly type = RecipeActionEnum.UPDATE_RECIPE;
  constructor(public payload: { index: number; newRecipe: Recipe }) {}
}
export class DeleteRecipe implements Action {
  readonly type = RecipeActionEnum.DELETE_RECIPE;
  constructor(public payload: number) {}
}

export class StoreRecipes implements Action {
  readonly type = RecipeActionEnum.STORE_RECIPES;
}

export type RecipesActions =
  | SetRecipes
  | FetchRecipes
  | AddRecipe
  | UpdateRecipe
  | DeleteRecipe
  | StoreRecipes;
