import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../shared/models/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() userCreated = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;
  constructor(private router: Router) {}

  ngOnInit() {

  }
  onSubmit(){
    console.log(this.newUser);
    localStorage.setItem(this.newUser.userName,JSON.stringify(this.newUser.password));
  ///the event that user is created
    this.userCreated.emit({ user: this.newUser });
    this.newUser = new User();
    this.active = false;
    setTimeout(() => this.active = true , 0);
    this.router.navigate(['/login']);
  }

}
