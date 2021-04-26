import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookingGuideComponent } from './components/cooking-guide/cooking-guide.component';

const routes: Routes = [
  {
    path: '',
    component: CookingGuideComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookingGuideRoutingModule { }
