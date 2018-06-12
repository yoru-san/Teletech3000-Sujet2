import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public AuthStatus = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(form) {
    this.getUser().subscribe(response => {
      this.handleResponse(response, form);
    }, error => {
      console.log(error);
    });
  }

  changeAuthStatus(value: boolean){
    this.AuthStatus.next(value);
  }

  getUser(){
    return this.http.get('https://tp-angular-d227e.firebaseio.com/users.json');
  }

  handleResponse(response, form){
    if (response.email === form.email && response.password === form.password){
      this.changeAuthStatus(true);
      console.log("Logged in!");
      this.AuthStatus.subscribe(value => console.log(value));
      this.router.navigateByUrl('/profile');
    }
    else{
      console.log("Failed to log in");
    }
  }
}
