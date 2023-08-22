import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  appointmentForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public appointmentService: AppointmentService
  ) {
  }

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      appointmentType: '',
      date: '',
      time: '',
      address: '',
      phone: '',
      note: '',
      active: false // Set the initial value for "active"
    });
  }

  submitForm(): void {
    console.log('Submit Form Called');
    const newAppointment = new Appointment();
    newAppointment.populateFromForm(this.appointmentForm.value);

    this.appointmentService.createAppointment(newAppointment).subscribe(
      response => {
        console.log('Appointment Created:', response);
        this.router.navigate(['/appointments']);
      },
      error => {
        console.error('Error creating appointment:', error);
      }
    );
  }
}
