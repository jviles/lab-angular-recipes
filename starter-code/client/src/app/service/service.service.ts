import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { recipe } from '../model/recipe';

@Injectable()
export class ServiceService {

  recipes:recipe[]=[];
  newRecipes:recipe;
  

  constructor() { 

    this.newRecipes = new recipe ();
  }

  getAccessLog(): recipe[] {
    return this.recipes;
}
