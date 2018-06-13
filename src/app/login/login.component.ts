import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { error } from 'protractor';

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

  public error = false;
  private errorAuth: boolean;
  private loggedIn = false;

  constructor(
    private Auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  onSubmit(){
    this.Auth.login(this.form, isSuccessful => {
      if (!isSuccessful){
        this.error = true;
      }
    });
  }

  handleResponse(data){
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    this.error = error.error.error;
  }

}
