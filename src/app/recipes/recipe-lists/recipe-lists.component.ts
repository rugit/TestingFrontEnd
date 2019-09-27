import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
		new Recipe('A Test Recipe', 'Tasty Recipe', 'https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/roasted-kabocha-with-maple-syrup-and-ginger-xl-recipe1116.jpg?itok=0NpBu6S2'),
		new Recipe('Another Test Recipe', 'Tasty Recipe', 'https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/roasted-kabocha-with-maple-syrup-and-ginger-xl-recipe1116.jpg?itok=0NpBu6S2')
		
	]


  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
