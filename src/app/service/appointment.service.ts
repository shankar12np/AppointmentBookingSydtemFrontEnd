import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Appointment} from "../appointment";



@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseUrl: string = 'http://localhost:8080/appointments';

  constructor(private http: HttpClient) { }

  getAllAppointment(): Observable<Appointment[]> {
console.log('Get All Appointment Called')
    return this.http.get<Appointment[]>(this.baseUrl);
  }

  createAppointment(appointment: Appointment): Observable<any> {
    // @ts-ignore
    return this.http.post<any>(this.baseUrl, appointment, { responseType: 'text' });

  }

  deleteAppointment(id:number): Observable<any>{
    const url = this.baseUrl+ '/'+id;
    return this.http.delete(url, {responseType: 'text'});
  }

  updateAppointment(id: number, updatedAppointment: Appointment): Observable<string> {
    const url = this.baseUrl + '/' + id;
    return this.http.put(url, updatedAppointment, { responseType: 'text' });
  }

  register(newUser: any): Observable<any> {
    return this.http.post('http://localhost:8080/registerAPI/register', newUser, { responseType: 'text' });
  }
}
