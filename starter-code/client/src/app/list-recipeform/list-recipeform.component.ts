import { Component, OnInit } from '@angular/core';
import { recipe } from '../model/recipe';
import { AccescontrollogService } from '../service/accescontrollog.service';

@Component({
  selector: 'app-list-recipeform',
  templateUrl: './list-recipeform.component.html',
  styleUrls: ['./list-recipeform.component.css']
})
export class ListRecipeformComponent implements OnInit {
  recipes:recipe[]=[];
  newRecipes:recipe;
  
  constructor() { }

  ngOnInit() {
  }

}
