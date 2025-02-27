import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule, NgForm} from '@angular/forms';
import { AccountService } from '../service/account.service';
import { LoginResponse } from './login-response.module';
import { Router } from '@angular/router';
import { style } from '@angular/animations';

@Component({
  selector: 'app-create-account',
  imports: [FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
  providers: [AccountService]
})
export class CreateAccountComponent {

  isLoginMode: boolean = true;
  error: string = "";

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode
  }

  closeButton() {
    this.error = ""
  }

  formhandle(form: NgForm) {
    if(!form.valid) {
      return
    }

    const email = form.value.email;
    const password = form.value.password;
    let loginResponse: Observable<LoginResponse>;

    loginResponse = this.accountService.signUp(email, password);

    loginResponse.subscribe({
      next:() => {
        this.error = "";
        this.router.navigate(['/login'])
      },
      error: (err) => {
        this.error = err
      }
    })
  }



  password(inputs: HTMLInputElement) {
    inputs.type = inputs.type === "password" ? "text" : "password";
  }

}
