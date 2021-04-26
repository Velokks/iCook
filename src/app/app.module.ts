import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchRecipeModule } from 'src/app/modules/search-recipe/search-recipe.module';
import { CookingGuideModule } from './modules/cooking-guide/cooking-guide.module';
 
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SearchRecipeModule,
    CookingGuideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
