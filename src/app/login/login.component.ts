import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../service/account.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { LoginResponse } from '../create-account/login-response.module';

@Component({
  selector: 'login',
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoginMode: boolean = true;
  loading: boolean = false;
  error: string = ""

  constructor(
     private accountService: AccountService,
     private router: Router
  ) {}

  passwordsee(input: HTMLInputElement) {
    input.type = input.type === "password" ? "text" : "password";
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode
  }

  formhandle(form: NgForm) {
      if(!form.valid) {
        return
      }

      this.loading = true;

      const email = form.value.email;
      const password = form.value.password;
      let loginResponse: Observable<LoginResponse>;

      if (this.isLoginMode) {
        loginResponse = this.accountService.register(email, password);
      }

    }


}
