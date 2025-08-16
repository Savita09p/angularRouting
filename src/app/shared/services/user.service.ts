import { Injectable } from '@angular/core';
import { Iuser } from '../model/users';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersArr : Array<Iuser> =[
   {
    userName : 'Jhon Doe',
    userId : '123',
    userRole : "Candidate"
   }
  ]
  constructor(
    private  _router : Router,
    private  _snackBarService : SnackBarService
  ) { }

  fetchAllUsers() : Observable <Array<Iuser>> {
    return of(this.usersArr)
  }

 getUser(id : string):Observable<Iuser>{
    let user = this.usersArr.find(user => user.userId === id)!;
    return of(user)
  }

  addUser (userObj : Iuser) : void {
    this.usersArr.unshift(userObj)
    this._router.navigate(['users'])
     this._snackBarService.openSnackBar(`New User Added Successfully!!!..`)
  }

  updateUser (updatedUser : Iuser){
    let getIndex = this.usersArr.findIndex(user => user.userId === updatedUser.userId)
    this.usersArr[getIndex] = updatedUser;
    this._router.navigate(['users']);
    this._snackBarService.openSnackBar(`User Updated Successfully !!..`)
  }

  removeUser(id : string){
    let getIndex = this.usersArr.findIndex(user => user.userId === id)
    let removeUser = this.usersArr[getIndex]
    this.usersArr.splice(getIndex, 1)
    this._router.navigate(['users'])
     this._snackBarService.openSnackBar(`User Removed Successfully!!!...`)
  }
}
