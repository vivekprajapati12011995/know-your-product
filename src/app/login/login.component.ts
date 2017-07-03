import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


import { User } from '../shared/models/user';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() userLogged = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;

  constructor(private router: Router, private service : AuthenticationService) { }

  ngOnInit() {
  }
  

  onSubmit() {
    this.service.login(this.newUser).subscribe();
    this.router.navigate(['/home']);
    ///the event that user is gicreated
    this.newUser = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

}
