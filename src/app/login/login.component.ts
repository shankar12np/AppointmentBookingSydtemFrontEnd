import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";
import {BasicAuthenticationService} from "../service/basic-authentication.service";
import {Reviews} from "../reviews";
import {CreateReviewsService} from "../service/create-reviews.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = 'Invalid Credentials';
  invalidLogin: boolean = false;
  isLoggedIn: boolean = false;
  createReviewsFrom!: FormGroup;

  constructor(
    public router: Router,
    public authenticationService: AuthenticationService,
    public basicAuthenticationService: BasicAuthenticationService,
    public createReviewsService: CreateReviewsService
  ) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn(); // Update isLoggedIn on component initialization
  }

  // handleLogin() {
  //   if (this.authenticationService.authenticate(this.email, this.password)) {
  //     this.router.navigate(['welcome']);
  //     // Redirecting to the welcome page
  //     this.invalidLogin = false;
  //     this.isLoggedIn = true; // Update isLoggedIn after successful login
  //   } else {
  //     this.invalidLogin = true;
  //     this.errorMessage = 'Invalid credentials. Please try again.';
  //   }
  // }

  handleBasicLogin() {
    this.basicAuthenticationService.executeAuthenticationService(
      this.email, // Use the email field here
      this.password
    ).subscribe(
      data => {
        console.log(data);
        if (data === 'true') {
          this.router.navigate(['welcome']);
          this.isLoggedIn = true; // Update isLoggedIn after successful login
          sessionStorage.setItem('authenticatedUser', this.email)// if login is true season storage set here.
        } else {
          this.invalidLogin = true;
        }

      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }

  logout() {
    this.authenticationService.logout();
    sessionStorage.removeItem('authenticatedUser');
    this.isLoggedIn = false; // Update isLoggedIn after logout
  }

  // Create the submitFrom() method
  submitFrom(): void {
    // Create a new review object from the form data
    const newReview = new Reviews();
    newReview.text = this.createReviewsFrom.value.text; // Assuming 'text' is a field in your review object
    // Set other properties as needed

    // Call the service to submit the review
    this.createReviewsService.createReviews(newReview).subscribe(
      (response) => {
        console.log('Review created', response);
        // Optionally, you can redirect the user to a different page after submitting the review
        this.router.navigate(['/write-review']);
      },
      (error) => {
        console.error('Error creating review:', error);
        // Handle any error response from the server here
      }
    );
  }
}
