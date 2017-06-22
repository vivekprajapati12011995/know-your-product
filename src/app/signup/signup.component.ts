import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() userCreated = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;
  constructor(private router: Router,private service: UserService) {}

  ngOnInit() {

  }

  onSubmit(){
    console.log(this.newUser);
    this.service.createUser(this.newUser).subscribe();
    // this.newUser = new User();
    // this.active = false;
    setTimeout(() => this.active = true , 0);
    this.router.navigate(['/login']);
  }

}
