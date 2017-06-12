import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


import { User } from '../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() userLogged = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.newUser);
    var password = localStorage.getItem(this.newUser.userName);
    console.log("password1: " + password);
    console.log("password2: " + this.newUser.password);


    if (password == JSON.stringify(this.newUser.password)) {
      console.log("user logged  in successfully");
      this.router.navigate(['/']);
    } else {
      console.log("user not found");
      this.router.navigate(['/login']);
    }
    ///the event that user is created
    this.userLogged.emit({ user: this.newUser });
    this.newUser = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0);

  }

}
