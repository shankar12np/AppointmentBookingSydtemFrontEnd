import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {

  //private baseUrl= 'http://localhost:8080/password-reset'

  constructor(private http: HttpClient) { }

  sendRequestToken(phoneNumber: string): Observable<any> {
    const params = new HttpParams().set('phoneNumber', phoneNumber);
    const requestOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: params // Include phoneNumber as a request parameter
    };
    return this.http.post('http://localhost:8080/password-reset/request-token', { phoneNumber }, requestOptions);
  }
}
