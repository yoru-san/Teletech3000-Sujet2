import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

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

  constructor(
    private Auth: AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.Auth.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    this.error = error.error.error;
  }

}
