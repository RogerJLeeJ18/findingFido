/*Defines AppModule, the root module that tells Angular how to assemble the application. */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { EmailService } from './services/email.service';
import { AuthService } from './auth/auth.service';
import { PageService } from './services/page.service';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { PersonComponent } from './person-signup/person-signup.component';
import { PetComponent } from './pet-signup/pet-signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PetDashboardComponent } from './pet-dashboard/pet-dashboard.component';
import { ReviewComponent } from './review/review.component';
import { PetBooleanComponent } from './pet-boolean/pet-boolean.component';
import { ChatComponent } from './chat/chat.component';
import { PageNotFoundComponent } from './page-not-found'
import { CallbackComponent } from './callback.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    PersonComponent,
    PetComponent,
    DashboardComponent,
    ScheduleComponent,
    PetDashboardComponent,
    PetBooleanComponent,
    ReviewComponent,
    ChatComponent,
    CallbackComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService, PageService, EmailService,
    AuthHttp,
    provideAuth({
      headerName: 'Authorization',
      headerPrefix: 'bearer',
      tokenName: 'token',
      tokenGetter: (() => localStorage.getItem('id_token')),
      globalHeaders: [{ 'Content-Type': 'application/json' }],
      noJwtError: true
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

