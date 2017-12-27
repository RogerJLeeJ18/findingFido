/*Defines AppModule, the root module that tells Angular how to assemble the application. */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { PersonComponent } from './person-signup/person-signup.component';
import { PetComponent } from './pet-signup/pet-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PageNotFoundComponent } from './page-not-found'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PersonComponent,
    PetComponent,
    DashboardComponent,
    ScheduleComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }