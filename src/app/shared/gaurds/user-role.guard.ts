import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  private _route =inject(ActivatedRoute)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    let logInUser : string = localStorage.getItem('userRole')!;
    let arrOfUserRoles : Array<string> = route.data['userRole']
    return arrOfUserRoles.includes(logInUser)
  }
  
  
}
