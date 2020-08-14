import { Component, OnInit, EventEmitter, ElementRef, ViewChild, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f',{static:false}) slForm:NgForm;
  subscription:Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;
  constructor(private slservice:ShoppingListService) { }

  ngOnInit(){
    this.subscription=this.slservice.startedEditing.subscribe(
      (index:number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.slservice.getIngrediant(index);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    );
  }

  onSubmit(form:NgForm){
    const value=form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.slservice.updateIngrediant(this.editedItemIndex,newIngredient)
    }
    else{
      this.slservice.addIngredient(newIngredient);
    }
    this.editMode=false;
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.slservice.DeleteIngrediant(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
