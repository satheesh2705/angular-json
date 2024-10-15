import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthmoduleComponent } from './authmodule.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthmoduleComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },

  { path: '', redirectTo: 'auth', pathMatch:'full' },
  { path:'**', redirectTo:'auth', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthmoduleRoutingModule {}
