import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DetailsComponent } from './details/details.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { EditPageComponent } from './edit-page/edit-page.component';
import { MatModules } from '../shared/mat-module';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatPaginator,
    MatSortModule,
    MatTableModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatModules
  ],
})
export class HomeModule { }
