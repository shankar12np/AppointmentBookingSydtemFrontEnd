import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserValidationRequest} from "../user-validation-request";
import {UserValidateServiceService} from "../service/user-validate-service.service";

class UserValidationService {
}

@Component({
  selector: 'app-user-validation-request',
  templateUrl: './user-validation-request.component.html',
  styleUrls: ['./user-validation-request.component.css']
})
export class UserValidationRequestComponent {
  validationForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userValidateService: UserValidateServiceService
  ) {
    this.validationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required]]
    });
  }

  validatePersonalInfo() {
    if (this.validationForm.invalid) {
      return;
    }

    const request = new UserValidationRequest(
      this.validationForm.get('email')?.value,
      this.validationForm.get('userName')?.value
    );

    this.userValidateService.validatePersonalInfo(request).subscribe(
      () => {
        // Validation successful, navigate to password reset page
        this.router.navigate(['/password-reset']);
      },
      () => {
        // Handle validation error
        this.errorMessage = 'Validation failed. Please check your information.';
      }
    );
  }
}
