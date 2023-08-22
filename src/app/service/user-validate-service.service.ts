import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserValidationRequest} from "../user-validation-request";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserValidateServiceService {
  private baseUrl = 'http://localhost:8080'; // Change this to your API base URL

  constructor(private http: HttpClient) {}

  validatePersonalInfo(request: UserValidationRequest): Observable<any> {
    return this.http.post(this.baseUrl + '/validate', request);
  }
}
