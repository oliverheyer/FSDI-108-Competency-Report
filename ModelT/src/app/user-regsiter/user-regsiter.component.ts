import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-regsiter',
  templateUrl: './user-regsiter.component.html',
  styleUrls: ['./user-regsiter.component.css']
})
export class UserRegsiterComponent implements OnInit {
model : User = new User();
retypePassword: string;
userNameError = false;
passwordError = false;
passMatchError = false;
emailError = false;

constructor(private data : DataService) {}

ngOnInit() {}

userValueChanged(){
  if(this.model.userName.length > 3) {
    this.userNameError = false;
  }else {
    this.userNameError = true;
  }
}

passwordChanged(){
  this.passwordError = this.model.password.length < 6;
  this.passMatchError = this.model.password != this.retypePassword;

}
emailChanged() {
  // if the length of e-mail is less than 8 characters or not have @ then no go
  if(this.model.email.length < 8 || !this.model.email.includes('@')) {
    this.emailError = true;
  } else this.emailError = false;
}


registerUser() {
console.log('the user wants to save another user');
console.log(this.model);

var isThereAnError = false;
if(!this.model.userName){
  this.userNameError = true;
  isThereAnError = true;
}

if(!this.model.password) {
  this.passwordError = true;
  isThereAnError = true;
}



if (isThereAnError || this.passMatchError) {
  return;
}
//save the user in the service
this.data.saveUser(this.model);

  // create a new one
  // so user can register more users
  this.model = new User();
  this.retypePassword = "";



 }

}

