// appointment.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  appointments!: Appointment[];
  appointmentForm!: FormGroup;
  selectedAppointment: Appointment | undefined;
  isUpdateMode: boolean = false;


  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      appointmentType: '',
      date: '',
      time: '',
      address: '',
      phone: '',
      note: '',
       });
    this.getAppointmentList();
  }
  openUpdateForm(appointment: Appointment) {
    // @ts-ignore
    this.selectedAppointment = { ...appointment }; // Clone to prevent modifying original
    this.isUpdateMode = true;

    // Bind selectedAppointment data to form controls
    // @ts-ignore
    this.appointmentForm.patchValue(this.selectedAppointment);
  }

  cancelUpdate() {
    this.selectedAppointment = undefined;
    this.isUpdateMode = false;
    this.appointmentForm.reset(); // Reset form controls
  }

  private getAppointmentList() {
    this.appointmentService.getAllAppointment().subscribe((appointments: Appointment[]) => {
      this.appointments = appointments;
    });
  }

  updateAppointment(id: number | undefined) {
    if (id && this.appointmentForm.valid) {
      const updatedAppointment: Appointment = this.appointmentForm.value;

      this.appointmentService.updateAppointment(id, updatedAppointment).subscribe(
        () => {
          console.log('Appointment Updated');
          this.isUpdateMode = false; // Exit update mode
          this.selectedAppointment = undefined;
          this.getAppointmentList(); // Refresh the appointment list
        },
        error => {
          console.error('Error updating appointment:', error);
        }
      );
    }
  }



  deleteAppointment(id: number | undefined) {
    if (id) {
      const url = this.appointmentService.baseUrl + '/' + id;
      this.appointmentService.deleteAppointment(id).subscribe(
        () => {
          console.log('Appointment Deleted');
          // Refresh the appointment list
          this.getAppointmentList();
        },
        error => {
          console.error('Error deleting appointment:', error);
        }
      );
    }
  }


}
