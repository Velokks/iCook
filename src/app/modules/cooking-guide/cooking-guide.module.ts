import { NgModule } from '@angular/core';

import { CookingGuideRoutingModule } from './cooking-guide-routing.module';
import { CookingGuideComponent } from './components/cooking-guide/cooking-guide.component';

import { CommonImportsModule } from '../../auxiliary/common-imports.module';


@NgModule({
  declarations: [
    CookingGuideComponent
  ],
  imports: [
    CookingGuideRoutingModule,
    CommonImportsModule
  ],
  exports: [
    CookingGuideComponent
  ]
})
export class CookingGuideModule { }
