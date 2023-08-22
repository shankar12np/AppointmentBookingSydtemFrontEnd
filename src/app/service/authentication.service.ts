import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginApiUrl = 'http://localhost:8080/loginAPI/login';
  constructor(private http: HttpClient) { }
  authenticate(username: string, password: string){
    // console.log(' before ' + this.isUserLoggedIn());
    if (username ==="shankar" && password === '1234'){
      sessionStorage.setItem('authenticateUser', username);
      //  console.log('after' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }
  logout() {
    sessionStorage.removeItem('authenticateUser'); // Clear the user's session
  }


}
