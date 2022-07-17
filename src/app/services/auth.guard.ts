import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(): boolean {
    if(sessionStorage.getItem("token")){
      // const tk = JSON.parse(sessionStorage.getItem("token"))
      const tk=true;
      if (tk != true) {
        this.router.navigate(['login'])
      }
    }
    
    return !!sessionStorage.getItem("token");
  }

}
