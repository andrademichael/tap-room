import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="well" *ngFor="let currentKeg of childKegList">
    <h4>{{currentKeg.name}}</h4>
    <ul>
      <li>{{currentKeg.brand}}</li>
      <li>\${{currentKeg.price}}</li>
      <li><span [class]="highAlcoholContent(currentKeg)">{{currentKeg.alcoholContent}}%</span></li>
      <li>{{currentKeg.style}}</li>
      <li><span [class]="kegLow(currentKeg)">Pints left: {{currentKeg.pints}}</span></li>
      <br>
      <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentKeg)">Edit Keg!</button>
      <button class="btn btn-info" (click)="pourPintButtonHasBeenClicked(currentKeg)">Pour Pint</button>
    </ul>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() pintClickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  pourPintButtonHasBeenClicked(kegToPour: Keg) {
    this.pintClickSender.emit(kegToPour);
  }
  // filterByFullness: number = currentKeg.pints;

  kegLow(currentKeg){
    if (currentKeg.pints <= 10){
      return "bg-danger";
    } 
  }

  highAlcoholContent(currentKeg){
    if (currentKeg.alcoholContent >= 7){
      return "strongBooze";
    }
  }

}
