import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'Test Recipe',
      'https://www.recipetineats.com/wp-content/uploads/2017/01/Chicken-Shawarma-Wrap_3.jpg?resize=650,813'
    ),
  ];

  constructor() {}
}
