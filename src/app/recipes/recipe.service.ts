import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService{
    recipeSelected=new Subject<Recipe>();
    private recipes:Recipe[]=[
        new Recipe('Bhagyashree','This is a test',
        'https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR-Featured-395x500.jpg',
        [
            new Ingredient('Meat','1'),
            new Ingredient('Burger','10'),
        ]),
        new Recipe('Bhagyashree Sail','This is a test',
        'https://picturetherecipe.com/wp-content/uploads/2020/04/Vanilla-Cardamom-Kulfi-PTR-Featured-395x500.jpg',
        [
            new Ingredient('Buns','2'),
            new Ingredient("Meat",'6')
        ])
      ];
      constructor(private slService:ShoppingListService){

      }
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index:number){
        // console.log("index",this.recipes[index])
        return this.recipes[index];

    }
    addingIngredienttoRecipeList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}