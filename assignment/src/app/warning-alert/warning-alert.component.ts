import { Component } from "@angular/core";

@Component({
    selector:'app-warning-alert',
    template:`<p>This is a Warning, you are in danger!!</p>`,
    styles:[`
    p{
        padding: 20px;
        border: 3px solid red;
        background-color: pink;
        font-size: 20px;
    }
    `]
})
export class WarningAlertComponent{}