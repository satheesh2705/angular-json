import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authmodule/auth-guard.guard';
// canActivate:[AuthGuard]
const routes: Routes = [
  { path: 'index', loadChildren: () => import('./authmodule/authmodule.module').then(m => m.AuthmoduleModule) },
  { path:'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule), },
  { path:'', redirectTo:'index', pathMatch:'full'},
  {path:"**", redirectTo:"index", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
