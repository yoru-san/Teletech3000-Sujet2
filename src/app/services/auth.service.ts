import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public AuthStatus = new BehaviorSubject<boolean>(this.getAuthStatus());


  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.AuthStatus.subscribe(res => console.log("Auth Status:" + res));
   }

  login(form) {
    this.getUser().subscribe(response => {
      this.handleLoginResponse(response, form);
    }, error => {
      console.log(error);
    });
  }
  handleLoginResponse(response, form){
    if (response.email === form.email && response.password === form.password){
      this.changeAuthStatus(true);
      console.log("Logged in!");
      this.AuthStatus.subscribe(value => console.log(value));
      this.router.navigateByUrl("");
    }
    else{
      console.log("Failed to log in");
    }
  }

  logout(){
    localStorage.loggedIn = false;
    this.AuthStatus.next(false);
    this.router.navigateByUrl("");
  }

  changeAuthStatus(value: boolean){
    this.AuthStatus.next(value);
    localStorage.loggedIn = value;
  }

  getAuthStatus(){
    if (localStorage.loggedIn == "true"){
      return true;
    }
    else {
      return false;
    }
  }

  getUser(): Observable<any> {
    return this.http.get('https://b2-angular.firebaseio.com/kob2/user.json');
  }

  editUser(new_user){
    this.http.put('https://b2-angular.firebaseio.com/kob2/user.json', new_user).subscribe(
      response => {this.router.navigateByUrl('/profile')},
      error => console.log(error)
    );
  }
}
