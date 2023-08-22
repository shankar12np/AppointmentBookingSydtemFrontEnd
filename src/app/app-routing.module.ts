import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {ErrorComponent} from "./error/error.component";
import {RouteGuardService} from "./service/route-guard.service";
import {AppointmentComponent} from "./appointment/appointment.component";
import {CreateAppointmentComponent} from "./create-appointment/create-appointment.component";
import {RegistrationComponent} from "./registration/registration.component";
import {CreateReviewsComponent} from "./create-reviews/create-reviews.component";
import {ReviewsComponent} from "./reviews/reviews.component";

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'appointments', component:AppointmentComponent, canActivate:[RouteGuardService]},
  {path: 'appointments/create', component:CreateAppointmentComponent, canActivate:[RouteGuardService]},
  {path: 'welcome', component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path: 'logout', component:LogoutComponent, canActivate:[RouteGuardService]},
  {path: 'register', component:RegistrationComponent},
  {path: 'create-reviews', component:CreateReviewsComponent},
  {path: 'get-reviews', component:ReviewsComponent},
  {path: '**', component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
