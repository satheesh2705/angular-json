import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthmoduleRoutingModule } from './authmodule-routing.module';
import { AuthmoduleComponent } from './authmodule.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatModules } from'../shared/mat-module'

@NgModule({
  declarations: [
    AuthmoduleComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthmoduleRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    MatModules

  ]
})
export class AuthmoduleModule { }
