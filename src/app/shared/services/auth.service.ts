import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILogInUser, Iregistraton } from '../model/user';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registration(user: any) {
    throw new Error('Method not implemented.');
  }
  AUTH_URL : string =`${environment.authurl}`;

  constructor(
    private _http : HttpClient,
    private _router :Router
  ) { }

  register(userDetails : Iregistraton) : Observable<any>{
    return this._http.post(`${this.AUTH_URL}/api/auth/register`, userDetails);

  }

  logIn(userDetails : ILogInUser) : Observable<any>{
    let LOGIN_URL =`${this.AUTH_URL}/api/auth/login`
    return this._http.post<any>(LOGIN_URL,userDetails)
  }

  saveToken(token : string){
    localStorage.setItem('token', token)
  }

  getToken() : string | null{
    return localStorage.getItem('token')
  }
}
