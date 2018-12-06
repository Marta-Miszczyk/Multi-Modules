import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesktopGuard implements CanActivate {

  constructor(/*private userService: UserService,*/ private router: Router) { }

  // check if can access do DESKTOP module
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const is_Allowed = true;  // this.authService.isLoggedIn();

    // if not, redirect to /login
    if (!is_Allowed) {
      this.router.navigateByUrl('401');
      return false;
    }

    return true;
  }

}
