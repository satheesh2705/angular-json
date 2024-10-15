import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';


@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router:Router){

  }

  canActivate() : boolean {
    if(sessionStorage.getItem('isLoggedIn')){
      return true;
    }
    else{
      this.router.navigate(['/index/auth/login'])
      return false;
    }
  }

}
