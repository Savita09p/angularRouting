import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/users';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersArr : Array<Iuser> =[]
  constructor(
    private _userService : UserService,
    private _router : Router,
    private _route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let usersSubscription = this._userService.fetchAllUsers().subscribe((res:Iuser[])=>{
      console.log(res)
      this.usersArr = res
    })
    this._router.navigate([this.usersArr[0].userId],{
      relativeTo : this._route
    })
  }

}
