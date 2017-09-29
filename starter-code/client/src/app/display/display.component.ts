import { Component, OnInit } from '@angular/core';
import {recipe} from '../model/recipe';
import { RecipesService } from '../services/recipes.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  Recipe: recipe[]=[];
  
  constructor() { }

  ngOnInit() {
  }

}
