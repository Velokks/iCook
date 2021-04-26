import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddRecipeService {

  recipeName: string = '';
  recipeDescription: string = '';
  recipeIngredient = new BehaviorSubject<string>('');
  recipeStep = new BehaviorSubject<string>('');
  recipeURL = new BehaviorSubject<string>('');

  constructor() { }
}
