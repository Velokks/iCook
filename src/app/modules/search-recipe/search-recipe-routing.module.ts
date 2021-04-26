import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component';

const routes: Routes = [
  {
    path: '',
    component: SearchRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRecipeRoutingModule { }
