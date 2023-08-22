import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {
  }

  // authenticate(username: string, password: string) {
  //   // console.log(' before ' + this.isUserLoggedIn());
  //   if (username === "shankar" && password === '1234') {
  //     sessionStorage.setItem('authenticateUser', username);
  //     //  console.log('after' + this.isUserLoggedIn());
  //     return true;
  //   }
  //   return false;
  // }
  executeAuthenticationService(email: string, password: string): Observable<any> {
    const basicAuthHeaderString = 'Basic ' + window.btoa(email + ':' + password);
    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
      'Content-Type': 'application/json'
    });

    const url = 'http://localhost:8080/loginAPI/login';

    const requestData = {
      email: email,
      password: password
    };
    return this.http.post(url, requestData, {headers, responseType: 'text'});
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
