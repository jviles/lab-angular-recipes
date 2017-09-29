import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { ListRecipeformComponent } from './list-recipeform/list-recipeform.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipeComponent,
    ListRecipeformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
