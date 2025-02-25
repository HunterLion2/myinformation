import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() {}

  passwordsee(input: HTMLInputElement) {
    input.type = input.type === "password" ? "text" : "password";
  }

}
