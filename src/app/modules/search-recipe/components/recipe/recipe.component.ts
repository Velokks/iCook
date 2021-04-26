import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesListService } from '../../../../services/recipes-list.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipeList: Array<any>;

  constructor(
    public _router: Router,
    public _recipeList: RecipesListService
  ) { }

  ngOnInit(): void {
    this.recipeList = this._recipeList.recipeList;
  }

  goToCookingGuide(recipe: any) {
    this._recipeList.selectedRecipe.next(recipe);
    this._router.navigate(['guide']);
  }

  search(name: string) {
    let fullList = this._recipeList.recipeList;
    name = name.trim().toLowerCase();
    this.recipeList = fullList.filter(x => (x.Name.toLowerCase().trim()).includes(name));
  }

}
