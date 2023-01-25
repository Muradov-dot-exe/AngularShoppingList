import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import * as fromApp from '../store/app.reducer';
import * as recipesAction from '../recipes/store/recipe.action';
import { ofType } from '@ngrx/effects';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  baseUrl =
    'https://angular-shopping-list-bb0d6-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private store: Store<fromApp.AppState>
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(`${this.baseUrl}recipes.json`, recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(`${this.baseUrl}recipes.json`).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.store.dispatch(new recipesAction.SetRecipes(recipes));
      })
    );
  }
}
