import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, CanLoad } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(): boolean {
    const authenticated = this.authenticationService.isAuthenticated();
    if (!authenticated) {
      this.router.navigate(['authentication/login']);
      return false;
    }
    return true;
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }

  canLoad(): boolean {
    return this.canActivate();
  }
}
