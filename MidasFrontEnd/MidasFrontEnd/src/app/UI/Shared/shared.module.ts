import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDataFormComponent } from './client-data-form/client-data-form.component';
import { PersonDataFormComponent } from './person-data-form/person-data-form.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientDataFormComponent,
    PersonDataFormComponent,
    ClientsListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:
  [
    ClientDataFormComponent,
    PersonDataFormComponent,
    ClientsListComponent
  ]
})
export class SharedModule{ }