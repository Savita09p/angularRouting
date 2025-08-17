import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iuser } from '../../model/users';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,  OnDestroy {
userObj ! : Iuser;
  userId !: string;
  usersSubcription !: Subscription
  constructor(
    private _usersService : UserService,
    private _route : Router,
    private _routes: ActivatedRoute,
    // private _matDialog : MatDialog
    
  ) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this._routes.params
     .subscribe((params : Params) => {
       this.userId = params['userId'];
       this.usersSubcription =this._usersService.getUser(this.userId)
         .subscribe(res => {
          this.userObj = res
         })
     })
  }

  onRemoveUser(){
    //  const matDialogConfig = new MatDialogConfig()
    //  matDialogConfig.data =`Are you sure ?, You want to remove this User?`
    //  const dialogRef = this._matDialog.open(GetConfirmComponent, matDialogConfig)

    //  dialogRef.afterClosed()
    //   .subscribe(res => {
    //     console.log(res)
    //     if(res)
    //        this._usersService.removeUser(this.userId)
    //   })

    let getConfirm = confirm(`Are you sure you ? wnat to remove this user`)
    if(getConfirm){
      this._usersService.removeUser(this.userId)
    }
  }

  ngOnDestroy(){
    this.usersSubcription.unsubscribe()
  }
}
  