import { Component } from '@angular/core';
import { AppointmentService } from "../service/appointment.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  registrationSuccess: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private appointmentService: AppointmentService,
              private router: Router) {
  }

  handleRegistration() {
    const newUser = {
      userName: this.username,
      password: this.password,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName
    };

    this.appointmentService.register(newUser).subscribe(
      () => {
        this.registrationSuccess = true;
        this.router.navigate(['/login']);
        this.successMessage = 'Registration successful. You can now login.';
      },
      (error) => {
        this.errorMessage = 'Registration failed';
      }
    );
  }
}
