import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  isLoggedIn: boolean = this.authenticationService.isUserLoggedIn();

  constructor(public router : Router,
              public authenticationService: AuthenticationService) {
    this.authenticationService.logout();
    this.router.navigate(['/login']); // Redirect to the login page after logout
  }
  ngOnInit(): void {
   this.logout();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/logout']); // Redirect to the login page after logout
  }


}
