import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  log : any[] = [];
  toggle : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClickToggleButton(logItem : any){
    this.log.push(logItem);
    this.toggle=!this.toggle;
  }

}
