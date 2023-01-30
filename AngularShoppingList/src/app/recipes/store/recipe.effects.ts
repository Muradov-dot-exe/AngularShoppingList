import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, withLatestFrom } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import * as RecipesActions from './recipe.action';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipeEffects {
  baseUrl =
    'https://angular-shopping-list-bb0d6-default-rtdb.europe-west1.firebasedatabase.app/';

  fetchRecipes = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.RecipeActionEnum.FETCH_RECIPES),
      switchMap(() => {
        return this.http.get<Recipe[]>(`${this.baseUrl}recipes.json`);
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      map((recipes) => {
        return new RecipesActions.SetRecipes(recipes);
      })
    )
  );

  storeRecipes = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RecipesActions.RecipeActionEnum.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([actionData, recipesState]) => {
          return this.http.put(
            `${this.baseUrl}recipes.json`,
            recipesState.recipes
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
