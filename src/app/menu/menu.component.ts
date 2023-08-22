import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BasicAuthenticationService } from "../service/basic-authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(
    public router: Router,
    public basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.basicAuthenticationService.isUserLoggedIn();
  }

  logout(): void {
    this.basicAuthenticationService.logout();
    sessionStorage.removeItem('authenticatedUser');
    this.isLoggedIn = false;
  }
}
