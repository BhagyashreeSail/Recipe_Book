import { Injectable, EventEmitter } from '@angular/core';
import {Subject, VirtualTimeScheduler} from 'rxjs'

import {Ingredient} from '../shared/ingredient.model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged=new Subject<Ingredient[]>();
  startedEditing=new Subject<number>();
  private ingredients:Ingredient[]=[
    new Ingredient('Apple','5'),
    new Ingredient('Orange','5')
  ];
  constructor() { }

  getIngedients(){
    return this.ingredients.slice();
  }

  getIngrediant(index:number){
    return this.ingredients[index];
  }

  addIngredient(ingredient:Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients:Ingredient[]){
    // for(let ingredient of this.ingredients){
    //   this.addIngredient(this.ingredient)
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngrediant(index:number, newIngrediant:Ingredient){
    this.ingredients[index]=newIngrediant;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  DeleteIngrediant(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
