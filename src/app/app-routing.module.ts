import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () => import('./modules/search-recipe/search-recipe.module').then(m => m.SearchRecipeModule)
  },
{
  path: 'add',
  loadChildren: () => import('./modules/add-recipe/add-recipe.module').then(m => m.AddRecipeModule)
},
{
  path: 'guide',
  loadChildren: () => import('./modules/cooking-guide/cooking-guide.module').then(m => m.CookingGuideModule)
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
