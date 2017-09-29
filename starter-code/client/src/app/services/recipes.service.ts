import { Injectable } from '@angular/core';
import { recipe } from '../model/recipe';

@Injectable()
export class RecipesService {

  Recipe: recipe[]=[];
  
  constructor() { }

  getAccessLog(): recipe[] {
    return this.Recipe;
    }

}
