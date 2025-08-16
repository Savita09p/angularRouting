import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iregistraton } from '../model/user';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_AUTHURL : string = environment.authurl;
  LogInSub$ : Subject<boolean> = new Subject();
  constructor(
    private _http : HttpClient
  ) { }

  LogIn(loginObj : Iregistraton) : Observable<any>{
    return this._http.post<any>(`${this.BASE_AUTHURL}/login` , loginObj)
  }

  getToken(){
    return localStorage.getItem('token');
  }

  savetoken(token : string){
    return localStorage.setItem('token',token)
  }

  removetoken(){
    localStorage.removeItem('token');
  }

  registration(regObj : Iregistraton) : Observable<any>{
    return this._http.post<any>(`${this.BASE_AUTHURL}/register`,regObj)
  }

  getUserRole(){
    return localStorage.getItem('userRole')
  }

  saveUserRole(userRole : string){
    return localStorage.setItem('userRole',userRole)
  }

  removeUserRole(){
    localStorage.removeItem('userRole')
  }
}
