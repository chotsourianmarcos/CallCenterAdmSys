import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../Shared/shared.module';
import { BAComponent } from './ba.component';

@NgModule({
  declarations: [
    BAComponent
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
    BAComponent
    // RouterModule
  ]
})
export class BAModule{ }