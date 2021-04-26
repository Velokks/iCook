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
      this.recipeObj = x;
    })
    )
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
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
    annyang.start();
  }

  completeStep(tag: any) {
    this.recipeObj.CompletedSteps.push(parseInt(tag));
    this._change.detectChanges();
  }

  goBack() {
    this._location.back();
  }

}

