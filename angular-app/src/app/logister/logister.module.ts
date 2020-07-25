import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LogisterRoutingModule } from './logister-routing.module';

import {
    LogisterComponent,
    LogoutComponent
} from './pages';

import { LoginComponent, RegisterComponent } from './components';

import { SharedModule } from '../shared';

@NgModule({
  imports: [
    LogisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
  ],
  providers: [],
  declarations: [
    LogisterComponent,
    LogoutComponent,
    LoginComponent,
    RegisterComponent,
  ]
})
export class LogisterModule { }
