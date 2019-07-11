import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingInvoiceComponent } from './shopping-invoice/shopping-invoice.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingInvoiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
