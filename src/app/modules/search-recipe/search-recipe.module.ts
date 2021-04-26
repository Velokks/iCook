import { NgModule } from '@angular/core';

import { SearchRecipeRoutingModule } from './search-recipe-routing.module';
import { RecipeComponent } from '../search-recipe/components/recipe/recipe.component';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component'

import { CommonImportsModule } from '../../auxiliary/common-imports.module';


@NgModule({
  declarations: [
    SearchRecipeComponent,
    RecipeComponent
  ],
  imports: [
    SearchRecipeRoutingModule,
    CommonImportsModule
  ],
  exports: [
    SearchRecipeComponent,
    RecipeComponent
  ]
})
export class SearchRecipeModule { }
