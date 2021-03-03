import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUser } from './new-user';

const API = environment.ApiUrl;

@Injectable()
export class SignUpService {
  constructor(private http: HttpClient) {}
  checkUserNameTaken(userName: string) {
    return this.http.get(API + '/user/exists/' + userName);
  }
  signup(newUser: NewUser) {
    return this.http.post(API + '/user/signup', newUser);
  }
}
