import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRecipeRoutingModule } from './add-recipe-routing.module';

import { CommonImportsModule } from 'src/app/auxiliary/common-imports.module';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeCreatorComponent } from './components/recipe-creator/recipe-creator.component';
import { RecipePreviewComponent } from './components/recipe-preview/recipe-preview.component';

@NgModule({
  declarations: [
    AddRecipeComponent,
    RecipeCreatorComponent,
    RecipePreviewComponent,
  ],
  imports: [
    CommonModule,
    AddRecipeRoutingModule,
    CommonImportsModule
  ]
})
export class AddRecipeModule { }
