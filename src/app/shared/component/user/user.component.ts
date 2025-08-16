import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iuser } from '../../model/users';
import { ActivatedRoute, Params } from '@angular/router';
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
  userId !: string;
  userObj !: Iuser;
  userSub ! : Subscription;
  constructor(
    private _routes : ActivatedRoute,
    private _userService : UserService,
    private _matDialog : MatDialog,
  ) { }

  ngOnInit(): void {
    this._routes.params.subscribe((params : Params) => {
      this.userId = params['userId'];
      this.userSub = this._userService.getUser(this.userId).subscribe(res => {
        this.userObj= res;
      })
    })
  }


  onRemoveUser(){
  //  let GetConfirm = confirm (`Are you want to remove this user !!`)
  //  if(GetConfirm){
  //   this._userService.removeUser(this.userId)
  //  }

  
   const matDialogConfig = new MatDialogConfig()
     matDialogConfig.data =`Are you sure ?, You want to remove this User?`
     matDialogConfig.width='300px'
    //  matDialogConfig.height='100px'
     const dialogRef = this._matDialog.open(GetConfirmComponent, matDialogConfig)

     dialogRef.afterClosed()
      .subscribe(res => {
        console.log(res)
        if(res)
           this._userService.removeUser(this.userId)
      })
  
  }

  ngOnDestroy() : void {
    this.userSub.unsubscribe()
  }
}
