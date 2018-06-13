import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  private profile = null;
  private form = {
    name: null,
    email: null,
    password: null,
    new_password: null,
    password_confirmation: null
  }

  constructor(
    private Auth: AuthService
  ) { }

  ngOnInit() {
    this.Auth.getUser().subscribe(user => {
      this.profile = user;
      this.form.name = user.name;
      this.form.email = user.email;
    });
  }

  onSubmit(){
    console.log(this.form);
    if (this.form.password === this.profile.password){

      if (this.form.new_password){
        console.log("Setting new password");

        if (this.form.new_password === this.form.password_confirmation){
          this.Auth.editUser({
            name: this.form.name,
            email: this.form.email,
            password: this.form.new_password
          });
        }
        else{
          console.log("Password conf does not match");
        }
      }

      else{
        console.log("Keeping old password");

        this.Auth.editUser({
          name: this.form.name,
          email: this.form.email,
          password: this.form.password
        });
      }
    }
    else{
      console.log("Incorrect password");
    }
  }

}
