import { inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';
import { Iuser } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<Array<Iuser>> {
  private _userService=inject(UserService)
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iuser[] | Observable<Iuser[]> {
   // return of(true);
   return this._userService.fetchAllUsers();
  }

}
