import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { MyserviceService, User } from '../myservice.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

id: number=25;
//password: String;
message: String;
output: String;
//message: User[];
  constructor(private myservice: MyserviceService,private router: Router) { }

private location: Location;
  ngOnInit(): void {


  }
  
  onSubmit(user):any{
    console.log();
     this.myservice.userLogin(user.userId,user.password).subscribe(response => 
      this.hello(response));
  }
  hello(response)
  {
    this.message=response;
    if (this.message=="Optional.empty") {
      this.output="UserId or Password are Incorrect"
    } else {
      this.myservice.isLoggedIn=true;
      this.output="Logged in Succesfully";
      this.router.navigate(['/newpage']);
    }
  }

}
