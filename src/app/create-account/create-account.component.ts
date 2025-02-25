import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  imports: [],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent {

  passwordsee(input: HTMLInputElement) {
    input.type = input.type === "password" ? "text" : "password";
  }

  password(inputs: HTMLInputElement) {
    inputs.type = inputs.type === "password" ? "text" : "password";
  }

}
