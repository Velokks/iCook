import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddRecipeService } from '../../../../services/add-recipe.service';

@Component({
  selector: 'recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.scss']
})
export class RecipePreviewComponent implements OnInit {

  ingredientsArr: string[] = [];
  stepsArr: string[] = [];
  subs: Subscription = new Subscription;
  pictureURL: string = '';

  constructor(
    public _addRecipeService: AddRecipeService
  ) { }

  ngOnInit(): void {
    this.subs.add(
      this._addRecipeService.recipeIngredient.subscribe(x => {
        if (x) {
          this.ingredientsArr.push(x)
        }
      })
    );

    this.subs.add(
      this._addRecipeService.recipeStep.subscribe(x => {
        if (x) {
          this.stepsArr.push(x);
        }
      })
    );

    this.subs.add(
      this._addRecipeService.recipeURL.subscribe(x => {
        if (x) {
          this.pictureURL = x;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
