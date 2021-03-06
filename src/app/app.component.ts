import { Component } from '@angular/core';
import { User } from './shared/models/user';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    showLoader: boolean;

    constructor() {
    }

    ngOnInit() {
    }
    
    onUserLogged(event) {
        console.log("user: "+event.user);
    }

}
