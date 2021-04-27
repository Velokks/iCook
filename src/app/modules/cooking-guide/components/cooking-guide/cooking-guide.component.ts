import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import 'annyang';
import { Subscription } from 'rxjs';
import { RecipesListService } from '../../../../services/recipes-list.service';

declare const annyang: any;

@Component({
  selector: 'cooking-guide',
  templateUrl: './cooking-guide.component.html',
  styleUrls: ['./cooking-guide.component.scss']
})
export class CookingGuideComponent implements OnInit {

  recipeObj: any;
  ingredientsChecked: boolean = false;
  startedCooking: boolean = false;
  subs: Subscription = new Subscription;

  constructor(
    private _change: ChangeDetectorRef,
    private _location: Location,
    private _recipeListService: RecipesListService
  ) { }

  ngOnInit(): void {
    this.subs.add(this._recipeListService.selectedRecipe.subscribe(x => {
      if (x) {
        this.recipeObj = x;
        ///////////////Quick fix...TO DO: find a way to avoid the error
        if (!this.recipeObj.Ingredients[0].hasOwnProperty('Name')) {
          this.recipeObj.Ingredients = this.formatIngredientsArray(x.Ingredients);
        }
      }
    })
    )

    this.cookingPreparation();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  formatIngredientsArray(arr: string[]) {
    let newArr = [];
    for (let x of arr) {
      newArr.push({ Name: x, Checked: false });
    }
    return newArr;
  }

  public trackItem(index: number, item: any) {
    return item.trackId;
  }

  startCooking(arr: any[]) {
    this.startedCooking = true;
    let commands = {
      'complete step *tag': (tag: any) => { this.completeStep(tag) }
    };
    annyang.addCommands(commands);
    annyang.removeCommands(['start cooking', 'mark *tag'])
    annyang.start();
  }

  completeStep(tag: any) {
    this.recipeObj.CompletedSteps.push(parseInt(tag));
    this._change.detectChanges();
  }

  cookingPreparation() {
    let commands = {
      'mark *tag': (tag: any) => { this.checkIngredient(tag) },
      'start cooking': () => {
        this.startCooking(this.recipeObj.CompletedSteps);
        this._change.detectChanges();
      }
    };
    annyang.addCommands(commands);
    annyang.start();
  }

  checkIngredient(tag: any) {
    let tagIndex = parseInt(tag);
    this.recipeObj.Ingredients[tagIndex - 1].Checked = true;
    this._change.detectChanges();
  }

  goBack() {
    annyang.abort();
    this._location.back();
  }

}

