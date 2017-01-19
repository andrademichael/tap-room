import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template:`
    <h3>Add New Keg</h3>
    <div>
      <label>Enter Beer Name:</label>
      <input #newName>
      <br>
      <label>Enter Brewery:</label>
      <input #newBrand>
      <br>
      <label>Enter Beer Price:</label>
      <input #newPrice>
      <br>
      <label>Enter Alcohol Content:</label>
      <input #newAlcoholContent>
      <br>
      <label>Enter Beer Style:</label>
      <input #newStyle>
      <button (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value, newStyle.value); newName.value=''; newBrand.value=''; newPrice.value=''; newAlcoholContent.value=''; newStyle.value='';">Add Keg</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number, style: string) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent, style);
    this.newKegSender.emit(newKegToAdd);
  }
}
