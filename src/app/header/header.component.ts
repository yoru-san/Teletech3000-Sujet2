import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private showLogin = false;
  private loggedIn = false;

  constructor(
    private Auth: AuthService
  ) { }

  ngOnInit() {
    this.Auth.AuthStatus.subscribe(value => {
      this.loggedIn = value;
      if (this.loggedIn){
        this.showLogin = false;
      }
    });
  }

  onConnectClick() {
    this.showLogin = !this.showLogin;
  }

}
