import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  
  invoiceItems = [];
  // itemName: string = '';
  // itemPrice: string = '';

  constructor(){
    console.log("Root component -- Constructor called");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("Root component -- OnChanges called", changes);
  }

  ngOnInit(){
    console.log("Root component -- ngOnInit called");
  }

  ngDoCheck(){
    console.log("Root component -- ngDoCheck called");
  }

  ngAfterContentInit(){
    console.log("Root component -- ngAfterContentInit called");
  }

  ngAfterContentChecked(){
    console.log("Root component -- ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("Root component -- ngAfterView called");
  }

  ngAfterViewChecked(){
    console.log("Root component -- ngAfterViewChecked called");
  }

  ngOnDestroy(){
    console.log("Root component -- ngOnDestroy called");
  }

  onAddVegetable(event: {name: string, price: string}){
    var invoiceItem= {
      type: 'veg',
      name: event.name,
      price: event.price
    }
    this.invoiceItems.push(invoiceItem);
  }

  onAddCosmetic(event: {name: string, price: string}){
    var invoiceItem= {
      type: 'cos',
      name: event.name,
      price: event.price
    }
    this.invoiceItems.push(invoiceItem);
  }
}
