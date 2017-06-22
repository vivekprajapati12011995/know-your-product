import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { User } from '../models/user';


@Injectable()
export class UserService {

  constructor (
    private http: Http
  ) {}

//get all users
  getUsers() {
    return this.http.get('http://localhost:3000/api/products').map((res:Response) => res.json());
  }

  //get user by id
  getUser(id) {
    return this.http.get('http://localhost:3000/api/products/'+id).map((res:Response) => res.json());
  }

  createUser(user){
      
  }

}
