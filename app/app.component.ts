import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>

    <div [class]="priorityColor(currentRecipe)" *ngFor="let currentRecipe of recipes">
      <h4 (click)="isTested(currentRecipe)">{{currentRecipe.title}}</h4>
      <ul>
        <li>{{currentRecipe.ingredients}}</li>
        <li>{{currentRecipe.description}}</li>
        <button (click)="editRecipe(currentRecipe)">Edit!</button>
      </ul>
    </div>
    <div *ngIf="selectedRecipe">
      <h4>{{selectedRecipe.title}}</h4>
      <p>Tested? {{selectedRecipe.tested}}</p>
      <h4>Edit Recipe</h4>
      <label>Enter Title</label>
      <input [(ngModel)]="selectedRecipe.title">
      <br>
      <label>Enter Ingredients</label>
      <input [(ngModel)]="selectedRecipe.ingredients">
      <br>
      <label>Enter Description</label>
      <input [(ngModel)]="selectedRecipe.description">
      <br>
      <label>Enter Recipe Priority (3 is high, 1 is low):</label>
      <br>
      <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="1">1 (Low Priority)<br>
      <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="2">2 (Medium Priority)<br>
      <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="3">3 (High Priority)
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe ("Meatballs", "Beef, Veal, love", "pat them together and cook", 1),
    new Recipe ("Fluffy French Toast", "Bread, Eggs, Syrup, Half and Half, Oil, Flour, Cinnamon", "Fry it up, man", 3),
    new Recipe ("Cinnamon Rolls", "Flour, Milk, Yeast, Sugar, Cinnamon, Raisins, Walnuts", "Bake it up, yo", 2)
  ];
  selectedRecipe = null;
  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }
  finishedEditing() {
    this.selectedRecipe = null;
  }
  isTested(clickedRecipe: Recipe) {
    if(clickedRecipe.tested === true){
      alert("You've tried this one!");
    } else
      alert("You haven't tried this recipe yet!");
  }

  priorityColor(currentRecipe) {
    if (currentRecipe.priority === 3){
      return "bg-danger";
    } else if (currentRecipe.priority === 2){
      return "bg-warning";
    } else {
      return "bg-success";
    }
  }
}

export class Recipe {
  public tested: boolean = false;
  constructor(public title: string, public ingredients: string, public description: string, public priority: number) { }
}
