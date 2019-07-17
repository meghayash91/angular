import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToManager(){
    this.router.navigate(['/manager/1000']);
  }

  goToManagerName(){
    // this.router.navigate(['/manager/1000/yash']);
    this.router.navigate(['/manager/2000/sophie'], { queryParams: {sb:true}, fragment: 'loading'});
  }
}
