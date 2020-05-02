import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
 user: User;
 isLoggedIn: boolean=false;
  constructor(private httpService: HttpClient,private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn) {
      return true;
    } else {
      alert('Please log in')
      this.router.navigate(['']);
      return false;
    }
  }

  public addUser(adduser: User) {
    console.log("ins service add");
    console.log(adduser);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:8899/users/UserRegistration", adduser,  { headers, responseType: 'text'});
  }

  public userLogin(userId: String,password: String) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8126/users/UserLogin/"+userId+","+password,  { headers, responseType: 'text'});
  }
  
  public recovery(userId: String,password: String,rePassword: String) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8899/users/PasswordRecovery/"+userId+","+password+","+rePassword,  { headers, responseType: 'text'});
  }
  logout(userId: String) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get("http://localhost:8899/users/UserLogout/" + userId,  { headers, responseType: 'text'});
  }


}
export class User
{
  userId: number;
  password: String;
  rePassword: String;
  phonenumber: number;
  emailId: String;
}
