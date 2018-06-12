import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AuthStatus = new BehaviorSubject<boolean>(false);

  constructor() { }

  login(form) {

  }

  changeAuthStatus(value: boolean){
    this.AuthStatus.next(value);
  }
}
