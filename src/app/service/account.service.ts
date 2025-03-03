import { environment } from './../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, delay, tap, throwError } from 'rxjs';
import { UserModel } from '../model/login-model';
import { LoginResponse } from '../create-account/login-response.module';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  private api = environment._api;
  private user = new BehaviorSubject<UserModel | null>(null)

  constructor(
    private http: HttpClient,
  ) { }

  // Create-account.component'in

  // Burası Kayıt Bölümü
  signUp(email: string, password: string,) {
    return this.http.post<LoginResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api, {
      email: email,
      password: password,
      returnSecureToken: true,
    }).pipe(
      tap(response => {
        console.log(response)
      }),
      catchError(this.handleError)
    )
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
  }

  autoLogin() {
    if(localStorage.getItem("user") == null) {
      return;
    }

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const loadedUser = new UserModel(user.email, user.id, user._token, new Date (user._tokenExpirationDate));

    if(loadedUser._token) {
      this.user.next(loadedUser);
    }

  }


  // Burası da Giriş Bölümü
  register(email: string, password: string) {
    return this.http.post<LoginResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api, {
      email: email, // ++
      password: password, // ++
      returnSecureToken: true // ++
    }).pipe(
      tap(result => {
        this.handleLogin(result.email, result.localId, result.idToken, result.expiresIn);
      }),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let message = "hata oluştu"

    if (err.error.error) {
      switch (err.error.error.message) {
        case "EMAIL_EXISTS":
          message = "Bu mail hesabı zaten bulunmaktadır."
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          message = "Bir süre bekleyip tekrar deneyiniz"
          break;
        case "EMAIL_NOT_FOUND":
          message = "Email Bulunamadı"
          break;
        case "INVALID_PASSWORD":
          message = "Hatalı Parola"
          break;
        case "INVALID_LOGIN_CREDENTIALS":
          message = "Giriş Bilgileri Hatalı"
          break;
      }
    }
    return throwError(() => message)
  }

  private handleLogin(email: string, id: string, token: string, expiresIn: string) {
    const tokenExpirationDate = new Date(new Date().getTime() + (+expiresIn * 1000));

    const user = new UserModel(
      email,
      id,
      token,
      tokenExpirationDate
    );

    this.user.next(user);

    localStorage.setItem("user", JSON.stringify(user));
  }

}


