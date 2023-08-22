export class Appointment {
  id?: number;
  appointmentType?: string;
  date?: string;
  time?: string;
  address?: string;
  phone?: string;
  note?: string;
  active?: boolean;

  // Empty constructor
  constructor() {}

  // This function will fill the properties from a form or other source
  populateFromForm(formValue: any) {
    this.appointmentType = formValue.appointmentType;
    this.date = formValue.date;
    this.time = formValue.time;
    this.address = formValue.address;
    this.phone = formValue.phone;
    this.note = formValue.note;
    this.active = formValue.active;
  }
}
