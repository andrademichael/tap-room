import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tap Room</h1>

    <div>
      <h4 *ngFor="let currentKeg of kegs">{{currentKeg.name}}</h4>
      <ul>
        <li>{{currentKeg.brand}}</li>
        <li>$ {{currentKeg.price}}</li>
        <li>{{currentKeg.alcoholContent}}</li>
        <li>{{currentKeg.type}}</li>
        <button (click)="editKeg(currentKeg)">Edit!</button>
      </ul>
    </div>
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
  kegs: Keg[] = [
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

export class Keg {
  public pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number, public style: string) { }
}
