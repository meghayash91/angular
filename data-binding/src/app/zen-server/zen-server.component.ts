import { Component } from '@angular/core';

@Component({
    selector:'zen-server',
    templateUrl:'./zen-server.component.html',
    styleUrls:['./zen-server.component.css']
})

export class ZenServerComponent{

    serverId :number = 100;
    serverStatus : boolean = false; 
    serverName : string = '';

    constructor(){
        setTimeout(() => {this.serverStatus = true},5000)
    }

    getServerStatus(){
        if(this.serverStatus){
            return 'online';
        }
        else{
            return 'offline';
        }
        // return this.serverStatus;
    }
    onUpdateServerName(event : Event){
        this.serverName=(<HTMLInputElement>event.target).value;
    }
}