import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentComponent } from './appointment/appointment.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import {AuthenticationService} from "./service/authentication.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppointmentService} from "./service/appointment.service";
import {HttpClientModule} from "@angular/common/http";
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserValidationRequestComponent } from './user-validation-request/user-validation-request.component';
import { PasswordResetRequestComponent } from './password-reset-request/password-reset-request.component';
import { CreateReviewsComponent } from './create-reviews/create-reviews.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LikeCountComponent } from './like-count/like-count.component';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    WelcomeComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    ErrorComponent,
    CreateAppointmentComponent,
    RegistrationComponent,
    UserValidationRequestComponent,
    PasswordResetRequestComponent,
    CreateReviewsComponent,
    ReviewsComponent,
    LikeCountComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [AuthenticationService, AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
