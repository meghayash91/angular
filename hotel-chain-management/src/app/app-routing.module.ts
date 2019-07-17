import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { ManagerComponent } from './manager/manager.component';

const appRoutes: Routes=[
    {path: '', component: HomeComponent},
    {path: 'hotel', component: HotelComponent},
    {path: 'manager', component: ManagerComponent},
    {path: 'manager/:id', component: ManagerComponent},
    {path: 'manager/:id/:name', component: ManagerComponent} 
  ]

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}