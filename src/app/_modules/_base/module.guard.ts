import { Injectable } from '@angular/core';
import { Router, Route, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { templateJitUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class ModuleGuard implements CanLoad {

  has_access = true;

  constructor(/*private userService: UserService,*/ private router: Router) { }

  // validate if can access to BASE module and his child modules
  canLoad( route: Route ): boolean {
    if (!this.has_access) {
      this.router.navigate(['401']);
      return false;
    }

    return true;
  }

}
