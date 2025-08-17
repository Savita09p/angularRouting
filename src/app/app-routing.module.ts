import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { UsersComponent } from './shared/component/users/users.component';
import { UserFormComponent } from './shared/component/user-form/user-form.component';
import { UserComponent } from './shared/component/user/user.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { HomeComponent } from './shared/component/home/home.component';
import { AuthGuard } from './shared/gaurds/auth.guard';
import { UserRoleGuard } from './shared/gaurds/user-role.guard';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { UserResolver } from './shared/resolver/user.resolver';
import { SingleUserResolver } from './shared/resolver/singleuser.resolver';
import { CandeactivateGuard } from './shared/gaurds/can-deactivate.guard';


  const routes: Routes = [
  {
    path:'',
    component:AuthComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard, UserRoleGuard],
    data :{
      userRole :['buyer', 'admin']
    }
  },
  
  {
    path:'users',
    component:UsersComponent,
    canActivate:[AuthGuard,UserRoleGuard],
    resolve:{
      users : UserResolver
    },
    children:[
      {
        path:'addUser',
        component:UserFormComponent
      },
      {
        path:':userId',
        component:UserComponent,
        resolve:{
          user : SingleUserResolver
        }
      },
      {
        path:':userId/edit',
        component:UserFormComponent,
        canDeactivate:[CandeactivateGuard]
      }
    ],
    data : {
      userRole : ['buyer','admin', 'superAdmin']
    }
  },
  
  {
   path : 'page-not-found',
   component:PageNotFoundComponent,
   data :{
    msg : `Page Not Found using static data !!!..`
   }
  },
  {
    path: '**',
    redirectTo :"page-not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

 