import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() userLogged = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;

  constructor(private router: Router, private service : UserService) { }

  ngOnInit() {
  }
  

  onSubmit() {
    this.service.login(JSON.stringify(this.newUser)).subscribe();
    this.userLogged.emit({ user: this.newUser.firstname });
    this.router.navigate(['/']);
    ///the event that user is gicreated
    this.newUser = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

}
