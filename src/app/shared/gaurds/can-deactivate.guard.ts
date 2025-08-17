import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { IcanDeactivate } from '../model/canDeactivate';
import { SnackBarService } from '../services/snack-bar.service';
import { UserFormComponent } from '../component/user-form/user-form.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard implements CanDeactivate<IcanDeactivate> {
  private _authService =inject( AuthService)
  private _snackBarService = inject(SnackBarService)
  private _route=inject(Router)
  canDeactivate(
    component: IcanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    // return component.canDeactive();
    if(this._authService.getToken()){
      return true
    }else{
      this._snackBarService.openSnackBar(`Plz Log In First`)
      return this._route.createUrlTree([''])
    }
  }
  
}
