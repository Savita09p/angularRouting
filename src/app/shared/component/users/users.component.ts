import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/users';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    usersArr : Array<Iuser> =[];
  UsersSub !: Subscription;
  constructor(
    private _usersService : UserService,
    private _router : Router,
    private _route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers(){
    this.UsersSub = this._usersService.fetchAllUser()
      .subscribe((res: Iuser[]) =>{
        console.log(res);
        this.usersArr = res;
      })
      this._router.navigate([this.usersArr[0].userId],{
        relativeTo : this._route
      })
  }
}
