import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasselected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('Bhagyashree','This is a test','https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR-Featured-395x500.jpg'),
    new Recipe('Bhagyashree Sail','This is a test','https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR-Featured-395x500.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasselected.emit(recipe);
  }
}
