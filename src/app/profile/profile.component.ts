import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private profile = null;

  constructor(
    private Auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.Auth.getUser().subscribe(response => {
      this.profile = response;
    });
  }

}
