import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(public authenticationService: AuthenticationService,
              public  router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('RouteGuardService canActivate called');
    // Check if the user is logged in using session storage
    const isLoggedIn = sessionStorage.getItem('authenticatedUser') !== null;

    if (isLoggedIn) {
      // Allow access to the route
      console.log('User is logged in');
      return true;
    }

    // Redirect to login for unauthenticated users
    console.log('User is not logged in, redirecting to login');
    return this.router.createUrlTree(['login']);
  }
}
