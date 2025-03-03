import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AccountService } from '../service/account.service';
import { UserSettingComponent } from '../user-setting/user-setting.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'navbar',
  imports: [
    RouterModule,
    UserSettingComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [AccountService]
})
export class NavbarComponent {

  isAdmin: boolean = false;
  admin: string = environment.admin

  constructor(
    private route: Router,
    private accountService: AccountService
  ) {
    if(localStorage.getItem("user") != null) {
      this.route.navigate(['/main'])
    } else {
      this.route.navigate(['/login'])
    }

    if(this.admin === localStorage.getItem("admin")) {
      this.isAdmin = true
    } else {
      this.isAdmin = false
    }

  }

  resetUserInformation() {
    this.accountService.logout()
  }

}


