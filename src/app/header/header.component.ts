import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private showLogin = false;
  private logged = false;
  private name = null;

  constructor(
    private Auth: AuthService
  ) { }

  ngOnInit() {

    this.Auth.AuthStatus.subscribe(
      value => {
        this.logged = value;
        console.log("Show profile: " + this.logged);
      }
    )
  }

  onConnectClick() {
    this.showLogin = !this.showLogin;
  }
  onDeconnectClick() {
    this.Auth.logout();
  }

}
