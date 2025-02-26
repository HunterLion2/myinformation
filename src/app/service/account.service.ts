import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';
import { UserModel } from '../model/login-model';
import { LoginResponse } from '../create-account/login-response.module';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private api = environment._api;

  constructor(
    private http: HttpClient,
  ) { }

  // Create-account.component'in
  signUp(email: string, password: string) {
    return this.http.post<LoginResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }

  register(email: string, password:string) {
    return this.http.post<LoginResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api, {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }


}
