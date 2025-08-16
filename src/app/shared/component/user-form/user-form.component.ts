import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from '../../model/users';
import { UserService } from '../../services/user.service';
import { UuidService } from '../../services/uuid.service';
import { ActivatedRoute } from '@angular/router';
import { IcanDeactivate } from '../../model/canDeactivate';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  isInEditMode !: boolean;
  userForm !:FormGroup;
  userId !: string
  constructor(
    private _userService : UserService,
    private _uuidService : UuidService,
    private _routes : ActivatedRoute
  ) { }
  

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userName : new FormControl(null, [Validators.required]),
      userRole : new FormControl(null, [Validators.required])
    })
    console.log(this.userForm)
    this.userId = this._routes.snapshot.params['userId'];
    if(this.userId){
      this.isInEditMode = true;
      this._userService.getUser(this.userId).subscribe(user => {
        console.log(user);
        this.userForm.patchValue(user)
      })
    }

  }

  

  onUserSubmit(){
    if(this.userForm.valid){
      if(!this.isInEditMode){
        let newUser : Iuser = this.userForm.value;
        newUser.userId = this._uuidService.uuid()
        console.log(newUser)
        this._userService.addUser(newUser)
      }else {
        let updatedUser :Iuser = {...this.userForm.value, userId: this.userId}
        console.log(updatedUser)
        this._userService.updateUser(updatedUser)
      }
    }
  }

  canDeactivate(){
    if(this.userForm.dirty && this.isInEditMode){
      let getConfirm = confirm(`Are You Sure? You want to Discord these changes?`)
      return getConfirm
    }
    return true
  }
   

}
