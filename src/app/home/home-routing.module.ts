import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: 'dash-board', component: HomeComponent,
    children:[
      { path:'details',component:DetailsComponent}
    ]
   },
  { path:'',redirectTo:'dash-board', pathMatch:'full'},
  { path:'**',redirectTo:'dash-board', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
