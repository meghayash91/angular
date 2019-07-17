import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  id: string;
  name: string;
  sb: string;
  fragment: string;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.id = this.activedRoute.snapshot.params['id'];
    // this.name = this.activedRoute.snapshot.params['name'];

    this.activedRoute.params.subscribe((params)=>{
      this.id = params['id'];
    });

    this.activedRoute.params.subscribe((params) => {
      this.name = params['name'];
    });

    this.activedRoute.queryParams.subscribe((qs) => {
      this.sb = qs['sb'];
    });

    this.activedRoute.fragment.subscribe((f) => {
      this.fragment = f;
    })
  }

  // gotoHotel(){
  //   this.router.navigate(['/hotel']);
  // }
  
  // gotoHome(){
  //   this.router.navigate(['/home']);
  // }
}
