import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  logInForm !: FormGroup;
  SignUpForm !: FormGroup;
  allReadyHasAccount : boolean= true;
  constructor(
    private _authService : AuthService,
    private _snackBarService : SnackBarService,
    private _route : Router
  ) { }

  ngOnInit(): void {
    this.createLogInForm()
    this.createSignUpForm()
  }


  createLogInForm(){
    this.logInForm = new FormGroup({
      email : new FormControl(null,[Validators.required]),
      password :new FormControl(null,[Validators.required])
    })
  }

  createSignUpForm(){
    this.SignUpForm = new FormGroup({
      mail : new FormControl(null,[Validators.required]),
      password :new FormControl(null,[Validators.required]),
      userRole : new FormControl('buyer',[Validators.required])
    })
  }

  onLogIn(){
    if(this.logInForm.valid){
      let user = this.logInForm.value;
      this._authService.logIn(user)
       .subscribe({
        next :(res) =>{
          console.log(res)
          this._snackBarService.openSnackBar(res.message)
          this._authService.saveToken(res.token)
          //this._authService.saveUserRole(res.userRole)
          this.logInForm.reset();
          this._route.navigate(['home'])
          console.log(res.message)
        },
        error : err =>{
          this._snackBarService.openSnackBar(err.error.message)
        }
       })
    }

  }

  onRegister(){
   if(this.SignUpForm.valid){
    let user = this.SignUpForm.value;
    this.SignUpForm.reset();
    this._authService.register(user)
    .subscribe({
      next :(res) =>{
        this._snackBarService.openSnackBar(res.message)
        this._authService.saveToken(res.token),
        this.SignUpForm.reset(),
        this.allReadyHasAccount=true
    },
    error :(err) =>{
      this._snackBarService.openSnackBar(err.error.message)
    }
    })
   }
  }
}