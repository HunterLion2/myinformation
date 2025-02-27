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
  signUp(email: string, password: string) {
    return this.http.post<LoginResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(response => {

      }),
      catchError(this.handleError)
    )
  }

  // Burası da Giriş Bölümü
  register(email: string, password: string) {
    return this.http.post<LoginResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api, {
      email: email, // ++
      password: password, // ++
      returnSecureToken: true // ++
    }).pipe(
      tap(result => {
        console.log(result['email'])
      }),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let message = "hata oluştu (Şifrenizi 6 Karakter'den Küçük Yazmayın)"

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

      }
    }
    return throwError(() => message)
  }

}


