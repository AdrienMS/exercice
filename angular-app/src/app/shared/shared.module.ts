import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  BaseComponent,
  InputComponent,
  ButtonComponent,
  DateComponent,
  ArrayComponent,
  SelectComponent,
  DynamicFormComponent,
  MenuComponent,
  LoadingOverlayComponent,
  FabComponent,
  FloatingCardComponent,
} from './components';

import { DynamicFieldDirective } from './directives';

import { ActualDatePipe, SingleImagePipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule,
    FontAwesomeModule,
  ],
  declarations: [
      MenuComponent,
      InputComponent,
      ButtonComponent,
      BaseComponent,
      DateComponent,
      DynamicFieldDirective,
      DynamicFormComponent,
      SelectComponent,
      ArrayComponent,
      LoadingOverlayComponent,
      ActualDatePipe,
      SingleImagePipe,
      FabComponent,
      FloatingCardComponent,
    ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    // local modules
    MenuComponent,
    InputComponent,
    ButtonComponent,
    BaseComponent,
    DateComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    SelectComponent,
    ArrayComponent,
    LoadingOverlayComponent,
    FabComponent,
    FloatingCardComponent,
    ActualDatePipe,
    SingleImagePipe,
  ],
  entryComponents: [
    InputComponent,
    ArrayComponent,
    ButtonComponent,
    DateComponent,
    SelectComponent,
  ],
})
export class SharedModule {
}
