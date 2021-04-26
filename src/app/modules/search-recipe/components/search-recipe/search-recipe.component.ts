import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeComponent } from '../recipe/recipe.component';

@Component({
  selector: 'search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.scss']
})
export class SearchRecipeComponent implements OnInit {

  @ViewChild(RecipeComponent) recipe: RecipeComponent;

  searchValue: string = '';

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  search() {
    this.recipe.search(this.searchValue.toString());
  }

  goToAddRecipe() {
    this._router.navigateByUrl('/add')
  }

}
