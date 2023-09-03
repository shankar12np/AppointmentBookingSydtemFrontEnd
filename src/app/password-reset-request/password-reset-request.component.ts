import { Component } from '@angular/core';
import { PasswordResetService } from '../service/password-reset.service';

@Component({
  selector: 'app-password-reset-request',
  templateUrl: './password-reset-request.component.html',
  styleUrls: ['./password-reset-request.component.css']
})
export class PasswordResetRequestComponent {
  phoneNumber: string = '';
  message: string = ''; // Add this variable to display messages

  constructor(private passwordResetService: PasswordResetService) {}

  sendRequestToken(): void {
    this.message = ''; // Clear any previous messages
    if (!this.phoneNumber) {
      // Handle the missing phoneNumber here
      this.message = 'Phone number is required.';
      return; // Do not send the request if phoneNumber is missing
    }

    // Make an HTTP POST request to send the phoneNumber as a request parameter
    this.passwordResetService.sendRequestToken(this.phoneNumber).subscribe(
      (response) => {
        console.log('Request token sent successfully', response);
        // Handle the response as needed
        this.message = response; // Display the response message
      },
      (error) => {
        console.error('Error sending request token:', error);

      }
    );
  }
}
