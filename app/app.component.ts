import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <div *ngIf="selectedKeg">
      <h4>{{selectedKeg.name}}</h4>
      <h4>Edit Keg</h4>
      <label>Enter Name</label>
      <input [(ngModel)]="selectedKeg.name">
      <br>
      <label>Enter Brewery</label>
      <input [(ngModel)]="selectedKeg.brand">
      <br>
      <label>Enter Price</label>
      <input [(ngModel)]="selectedKeg.price">
      <br>
      <label>Enter Alcohol Content</label>
      <input [(ngModel)]="selectedKeg.alcoholContent">
      <br>
      <label>Enter Beer Style</label>
      <input [(ngModel)]="selectedKeg.style">
      <br>
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg ("Java the Hop", "Fort George", 5, 7, "IPA"),
    new Keg ("IRA", "Double Mountain", 4, 6, "India Red Ale"),
    new Keg ("RPM", "Boneyard Beer", 5, 6, "IPA")
  ];

  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg = null;
  }
}
