import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanLoad, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanLoad, CanActivate {

  loggedIn = true;  // temporary to test service

  constructor(/*private userService: UserService,*/ private router: Router) { }

  // validate if can load child BASE module
  // if not logged in then redirect to login page
  canLoad(route: Route): boolean {
    if (!this.loggedIn) {
      this.router.navigate(['login']);
    }
    return this.loggedIn;
  }

  // prevent load login page again when user in logged in
  // redirect to base module if user is on login page and is logged in
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.loggedIn) {
      return true;
    }

    this.router.navigate(['']);
    return this.loggedIn;
  }
}
