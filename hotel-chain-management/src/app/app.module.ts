import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { ManagerComponent } from './manager/manager.component';

const appRoutes: Routes=[
  {path: '', component: HomeComponent},
  {path: 'hotel', component: HotelComponent},
  {path: 'manager', component: ManagerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
