import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { HomeComponent } from './shared/component/home/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UsersComponent } from './shared/component/users/users.component';
import { UserComponent } from './shared/component/user/user.component';
import { UserFormComponent } from './shared/component/user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { AuthComponent } from './shared/component/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    UserComponent,
    UserFormComponent,
    GetConfirmComponent,
    AuthComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
