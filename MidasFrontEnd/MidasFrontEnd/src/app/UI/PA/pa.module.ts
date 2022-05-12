import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../Shared/shared.module';
import { PAComponent } from './pa.component';

@NgModule({
  declarations: [
    PAComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild([
      
    // ]),
    SharedModule,
    ReactiveFormsModule
  ],
  exports:
  [
    PAComponent
    // RouterModule
  ]
})
export class PAModule{ }