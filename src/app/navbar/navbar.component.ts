import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AccountService } from '../service/account.service';
import { UserSettingComponent } from '../user-setting/user-setting.component';

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

  constructor(
    private route: Router,
    private accountService: AccountService
  ) {
    if(localStorage.getItem("user") != null) {
      this.route.navigate(['/main'])
    }
  }

  resetUserInformation() {
    this.accountService.logout()
  }

}


