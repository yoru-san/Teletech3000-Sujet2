import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private form = {
    email: null,
    password: null
  };

  private error = null;

  private loggedIn = false;

  constructor(
    private Auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.Auth.AuthStatus.subscribe(
      value => this.loggedIn = value
    );
  }

  onSubmit(){
    this.Auth.login(this.form);
    // .subscribe(
    //   data => this.handleResponse(data),
    //   error => this.handleError(error)
    // );
  }

  handleResponse(data){
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    this.error = error.error.error;
  }

}
