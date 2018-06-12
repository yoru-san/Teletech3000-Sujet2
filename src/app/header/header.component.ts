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
  private name = null;

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

    if (this.loggedIn){
      this.Auth.getUser().subscribe(response => {
        this.name = response.name;
      });
    }
  }

  onConnectClick() {
    this.showLogin = !this.showLogin;
  }
  onDeconnectClick() {
    this.Auth.logout();
  }

}
