import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipe.action';

export interface State {
  recipes: Recipe[];
}

const initialState = {
  recipes: [],
};

export const recipeReducer = (
  state = initialState,
  action: RecipeActions.RecipesActions
) => {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipe: [...action.payload],
      };

    default:
      return state;
  }
};
