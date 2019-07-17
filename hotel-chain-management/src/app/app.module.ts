import { BrowserModule } from '@angular/platform-browser';
// import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { ManagerComponent } from './manager/manager.component';
import { AppRoutingModule } from './app-routing.module';

// const appRoutes: Routes=[
//   {path: '', component: HomeComponent},
//   {path: 'hotel', component: HotelComponent},
//   {path: 'manager', component: ManagerComponent},
//   {path: 'manager/:id', component: ManagerComponent},
//   {path: 'manager/:id/:name', component: ManagerComponent} 
// ]

@NgModule({
  declarations: [ 
    AppComponent, 
    HomeComponent, 
    HotelComponent, 
    ManagerComponent 
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
