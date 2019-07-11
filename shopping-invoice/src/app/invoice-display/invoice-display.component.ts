import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-invoice-display',
    templateUrl: './invoice-display.component.html',
    styleUrls: [ './invoice-display.component.css']
})

export class InvoiceDisplayComponent{
    
    invoiceItems = [];
    @Input() invoiceItem: {type: string, name: string, price: string};

    constructor() {}
}