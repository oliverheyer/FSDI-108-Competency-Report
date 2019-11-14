import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/user';

import{ Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  userList : User[] = [];

  userName: string  = '';
  password:  string = '';

  userNameError = false;
  passwordError = false;
  loginFailed = false;

  constructor(private data : DataService, private router: Router, private shared : SharedService) {
    this.userList = data.getAllUsers();
   }

  userChanged(){
    if(this.userName) this.userNameError = false;
    else this.userNameError = true;
  }

  passwordChanged(){
    if(this.password) this.passwordError = false;
    else this.passwordError = true;
  }

  login(){
    // validate for username and password not empty
    var missingInfo = false;
    if(!this.userName){
      missingInfo = true;
      this.userNameError = true;
    }
    if(!this.password){
      missingInfo = true;
      this.passwordError = true;
    }
    if(missingInfo) return; // do not continue

    /** logic
    * travel the userList array* get each element from the array
    * compare the userName and password with those of the element
    * if they match, send the user to register page, hide the login butto
    * else show login error
    * */

    var credsCorrect = false;
    for(var i =0; i< this.userList.length; i++){
      var user = this.userList[i];

      if(user.userName == this.userName && user.password == this.password){
        console.log("Logged in correctly");
        credsCorrect = true;
        this.loginFailed = false;
        this.shared.isUserLoggedIn = true;

        // send the user to the Register page
        this.router.navigate(['']);
        
      }
    }
    if(!credsCorrect){
      console.log('Incorrect data!');
      this.loginFailed = true;
    }
  }

}

