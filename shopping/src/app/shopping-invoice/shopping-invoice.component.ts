import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'shopping-invoice',
    templateUrl: './shopping-invoice.component.html',
    styleUrls: ['./shopping-invoice.component.css']
})

export class ShoppingInvoiceComponent implements OnInit {

     invoiceItems=[];
     itemName : string = '';
     itemPrice : string = '';

    constructor(){}
    ngOnInit() {}

    onAddVegetable(elName: HTMLInputElement, elPrice: HTMLInputElement){
        var invoiceItem={
            type: 'veg',
            name: elName.value,
            price: elPrice.value
        }
        this.invoiceItems.push(invoiceItem);
    }
    onAddCosmetic(elName: HTMLInputElement, elPrice: HTMLInputElement){
        var invoiceItem={
            type: 'cos',
            name: elName.value,
            price: elPrice.value
        }
        this.invoiceItems.push(invoiceItem);
    }
}