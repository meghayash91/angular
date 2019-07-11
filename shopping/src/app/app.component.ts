import { Component, OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  invoiceItems=[];
  // itemName: string = '';
  // itemPrice:string ='';

  constructor(){
    // console.log("Root Component -- Constructor called");
  }
  
  // ngOnChanges(changes: SimpleChanges){
  //   console.log("Root Component -- OnChanges called", changes);
  // }

  // ngOnInit(){
  //   console.log("Root Component -- OnInit called");
  // }

  // ngDoCheck(){
  //   console.log("Root Component -- DoCheck called");
  // }

  // ngAfterContentInit(){
  //   console.log("Root Component -- AfterContentInit called");
  // }

  // ngAfterContentChecked(){
  //   console.log("Root Component -- AfterContentChecked called");
  // }

  // ngAfterViewInit(){
  //   console.log("Root Component -- AfterViewInit called");
  // }

  // ngAfterViewChecked(){
  //   console.log("Root Component -- AfterViewChecked called");
  // }
  
  // ngOnDestroy(){
  //   console.log("Root Component -- OnDestroy called");
  // }

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
