import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div *ngIf="childSelectedKeg" class="well">
      <h4>{{childSelectedKeg.name}}</h4>
      <h4>Edit Keg</h4>
      <label>Enter Name</label>
      <input [(ngModel)]="childSelectedKeg.name">
      <br>
      <label>Enter Brewery</label>
      <input [(ngModel)]="childSelectedKeg.brand">
      <br>
      <label>Enter Price</label>
      <input [(ngModel)]="childSelectedKeg.price">
      <br>
      <label>Enter Alcohol Content</label>
      <input [(ngModel)]="childSelectedKeg.alcoholContent">
      <br>
      <label>Enter Beer Style</label>
      <input [(ngModel)]="childSelectedKeg.style">
      <br>
      <button class="btn btn-success" (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
