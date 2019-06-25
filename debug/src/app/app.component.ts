import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [];

  onAddServer(serverName: string){
    this.servers.push(serverName);
  }

  onRemoveServer(id: number){
    const position = id ;
    this.servers.splice(position, 1);
  }
}
