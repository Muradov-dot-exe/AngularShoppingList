import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

export enum ShoppingListAction {
  ADD_INGREDIENT = '[Shopping List] Add Ingredient',
  ADD_INGREDIENTS = '[Shopping List] Add Ingredients',
  UPDATE_INGREDIENT = '[Shopping List] Update Ingredient',
  DELETE_INGREDIENT = '[Shopping List] Delete Ingredient',
  START_EDIT = '[Shopping List] Start Ingredient',
  STOP_EDIT = '[Shopping List] Stop Ingredient',
}

export class AddIngredient implements Action {
  readonly type = ShoppingListAction.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
  readonly type = ShoppingListAction.ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
  readonly type = ShoppingListAction.UPDATE_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export class DeleteIngredient implements Action {
  readonly type = ShoppingListAction.DELETE_INGREDIENT;
}

export class StartEdit implements Action {
  readonly type = ShoppingListAction.START_EDIT;

  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = ShoppingListAction.STOP_EDIT;
}

export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient
  | StartEdit
  | StopEdit;
