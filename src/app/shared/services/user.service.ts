import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../models/user';


@Injectable()
export class UserService {

  private baseURL:string = 'http://localhost:3000/api/users'
  constructor (
    private http: Http
  ) {}

//get all users
  getUsers() {
    return this.http.get(this.baseURL).map((res:Response) => res.json());
  }

  //get user by id
  getUser(id) {
    return this.http.get(this.baseURL+id).map((res:Response) => res.json());
  }

  createUser(user){
    console.log(JSON.stringify(user));
    return this.http.post("http://localhost:3000/api/user/register",user).map(function(res:Response){
       res.json();
    });
  }

  login(user){
    return this.http.post('http://localhost:3000/api/user/login/',user).map((res:Response) => res.json());
  }

}
