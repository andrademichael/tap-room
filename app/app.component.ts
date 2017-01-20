import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Tropical Tap Room</h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (pintClickSender)="pourPint($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg"
    (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    <br>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
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

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }

  pourPint(pouredKeg) {
    // this.selectedKeg = pouredKeg;
    pouredKeg.pints = pouredKeg.pints - 1;
  }
}
