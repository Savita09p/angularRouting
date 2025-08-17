import { Injectable } from '@angular/core';
import { Iuser } from '../model/users';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService } from './snack-bar.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  user !: Iuser;
  usersArr : Array<Iuser> =[
    {
      userName : 'Jhone Doe',
      userId : '123',
      userRole: "Candidate"
    },
    {
      userName : "May Doe",
      userId : '124',
      userRole : "Admin"
    },
    {
      userName : "July Doe",
      userId : '125',
      userRole: "Candidate"
    }
  ]
  constructor(
    private _route : Router,
    private _snackBarService: SnackBarService,
    private _http : HttpClient
    
  ) { }

  fetchAllUser() : Observable <Array<Iuser>>{
    return of(this.usersArr)
  }

  //to get users 
  getUser(id : string):Observable<Iuser>{
    let user = this.usersArr.find(user => user.userId === id)!;
    return of(user)
  }

  addUser(userObj : Iuser) : void{
    this.usersArr.unshift(userObj)
    this._route.navigate(['users'])
    this._snackBarService.openSnackBar(`New User Added Successfully!!!..`)

  }

  updateUser(updatedUser : Iuser){
    let getIndex = this.usersArr.findIndex(user=> user.userId===updatedUser.userId)
    this.usersArr[getIndex] = updatedUser;
    this._route.navigate(['users']);
    this._snackBarService.openSnackBar(`User Updated Successfully !!..`)

  }

  removeUser(id : string){
    let getIndex = this.usersArr.findIndex(user => user.userId === id)
    let RemoveUser = this.usersArr[getIndex]
    this.usersArr.splice(getIndex,1)
    this._route.navigate(['users']);
    this._snackBarService.openSnackBar(`User Removed Successfully!!!...`)
  }

  // getobj(prodId : string) : Observable<Iproduct>{
  //   return this._http.get<Iproduct>(`${this.}`)
  // }
}
