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

export class SingleUserResolver implements Resolve<Iuser> {
  private _userService = inject(UserService)
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iuser |Observable<Iuser> {
    // return of(true);
    let userId = route.paramMap.get('userId')!
    return this._userService.getUser(userId)
  }
}
