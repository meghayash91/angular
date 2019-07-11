import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-invoice-input',
    templateUrl: './invoice-input.component.html',
    styleUrls: [ './invoice-input.component.css' ]
})

export class InvoiceInputComponent{
    
    invoiceItems = [];
    itemName: string = '';
    itemPrice: string = '';

    @Output() onVegetableAdded = new EventEmitter<{name: string, price: string}>();
    @Output() onCosmeticAdded = new EventEmitter<{name: string, price: string}>();
  
    constructor(){}
  
    onAddVegetable(){
      var invoiceItem= {
        name: this.itemName,
        price: this.itemPrice
      }
    //   this.invoiceItems.push(invoiceItem);
      this.onVegetableAdded.emit(invoiceItem);
    }
  
    onAddCosmetic(){
      var invoiceItem= {
        name: this.itemName,
        price: this.itemPrice
      }
    //   this.invoiceItems.push(invoiceItem);
      this.onCosmeticAdded.emit(invoiceItem);
    }
}