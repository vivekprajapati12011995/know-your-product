import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [];

  onUserCreated(event){
    console.log("event!!!!!!");
    this.users.push(event.user);
    console.log(this.users);
  }

  onUserLogged(event){
    console.log(this.users);
  }
}
