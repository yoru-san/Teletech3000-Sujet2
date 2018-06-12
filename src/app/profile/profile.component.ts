import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private profile = {
    lastname: null,
    firstname: null,
    email: null,
    password: null

  };

  constructor(
    private Auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }

}
