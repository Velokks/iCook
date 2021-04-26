import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { fromEvent, pipe, Observable } from 'rxjs';
import { RecipeModel } from 'src/app/models/recipe';
import { AddRecipeService } from '../../../../services/add-recipe.service';
import { delay, takeUntil, tap } from 'rxjs/operators';
import 'annyang';
import { RecipesListService } from '../../../../services/recipes-list.service';
import { Router } from '@angular/router';

declare const annyang: any;

@Component({
  selector: 'recipe-creator',
  templateUrl: './recipe-creator.component.html',
  styleUrls: ['./recipe-creator.component.scss']
})
export class RecipeCreatorComponent implements OnInit {

  description: string = '';
  ingredient: string = '';
  ingredientsList: string[] = [];
  step: string = '';
  stepsList: string[] = [];
  pictureURL: string = '';

  constructor(
    public _addRecipeService: AddRecipeService,
    private ngZone: NgZone,
    private _recipesList: RecipesListService,
    private _router: Router
  ) { }

  ngOnInit(): void { }

  addByVoice() { }

  addIngredient() {
    this.ingredientsList.push(this.ingredient);
    this._addRecipeService.recipeIngredient.next(this.ingredient);
    this.ingredient = '';
  }

  addStep() {
    this.stepsList.push(this.step)
    this._addRecipeService.recipeStep.next(this.step);
    this.step = '';
  }

  addURL() {
    this._addRecipeService.recipeURL.next(this.pictureURL);
    this.pictureURL = '';
  }

  createRecipe() {
    let recipe: RecipeModel = new RecipeModel();

    recipe.Name = this._addRecipeService.recipeName;
    recipe.Image = this._addRecipeService.recipeURL.getValue();
    recipe.Description = this._addRecipeService.recipeDescription;
    recipe.Ingredients = this.ingredientsList;
    recipe.Steps = this.stepsList;
    recipe.Rating = 2; //Hardcoded for now
    recipe.CompletedSteps = [];
    this._recipesList.recipeList.push(recipe);
    this._router.navigate(['search']);
  }
  //////Test Logic For Voice Adding///////////////////
  //voiceActiveSectionDisabled: boolean = true;
  //voiceActiveSectionError: boolean = false;
  //voiceActiveSectionSuccess: boolean = false;
  //voiceActiveSectionListening: boolean = false;
  //voiceText: any;

  //testOne() {
  //  let commands = {
  //    //'test': () => {
  //    //  this.startVoiceRecognition();
  //    //}
  //    'test': () => {
  //      annyang.addCallback('result', function (whatWasHeardArray: any) {
  //        console.log(whatWasHeardArray)
  //      });
  //    }
  //  };

  //  annyang.addCommands(commands);
  //  annyang.start();

  //}

  //startVoiceRecognition(): void {
  //  if (annyang) {
  //    this.initializeVoiceRecognitionCallback();
  //    //annyang.start({ autoRestart: false });
  //  }
  //}

  //initializeVoiceRecognitionCallback(): void {

  //  //annyang.addCallback('soundstart', (res: any) => {
  //  //  this.ngZone.run(() => this.voiceActiveSectionListening = true);
  //  //});

  //  annyang.addCallback('end', () => {
  //    if (this.step === undefined) {
  //      this.ngZone.run(() => this.voiceActiveSectionError = true);
  //      annyang.abort();
  //    }
  //  });

  //  annyang.addCallback('result', (userSaid: any) => {
  //    this.ngZone.run(() => this.voiceActiveSectionError = false);
  //    console.log(userSaid)
  //    let queryText: any = userSaid[0];

  //    annyang.abort();

  //    this.voiceText = queryText;
  //    console.log(this.voiceText)
  //    this.ngZone.run(() => this.voiceActiveSectionListening = false);
  //    this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
  //  });
  //}

  //initializeVoiceRecognitionCallback(): void {
  //  annyang.addCallback('soundstart', (res: any) => {
  //    this.ngZone.run(() => this.voiceActiveSectionListening = true);
  //  });

  //  annyang.addCallback('end', () => {
  //    if (this.voiceText === undefined) {
  //      this.ngZone.run(() => this.voiceActiveSectionError = true);
  //      annyang.abort();
  //    }
  //  });

  //  annyang.addCallback('result', (userSaid: any) => {
  //    this.ngZone.run(() => this.voiceActiveSectionError = false);

  //    let queryText: any = userSaid[0];

  //    annyang.abort();

  //    this.voiceText = queryText;

  //    this.ngZone.run(() => this.voiceActiveSectionListening = false);
  //    this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
  //  });
  //}

  //startVoiceRecognition(): void {
  //  this.voiceActiveSectionDisabled = false;
  //  this.voiceActiveSectionError = false;
  //  this.voiceActiveSectionSuccess = false;
  //  this.voiceText = undefined;

  //  if (annyang) {
  //    this.initializeVoiceRecognitionCallback();
  //    annyang.start({ autoRestart: false });
  //  }
  //}

  //closeVoiceRecognition(): void {
  //  this.voiceActiveSectionDisabled = true;
  //  this.voiceActiveSectionError = false;
  //  this.voiceActiveSectionSuccess = false;
  //  this.voiceActiveSectionListening = false;
  //  this.voiceText = undefined;

  //  if (annyang) {
  //    annyang.abort();
  //  }
  //}
}
