import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ConsultBodyComponent } from './consult-body/consult-body.component';
import { CreateBodyComponent } from './create-body/create-body.component';
import { ModifyBodyComponent } from './modify-body/modify-body.component';
import { CeaseBodyComponent } from './cease-body/cease-body.component';
import { SharedModule } from '../Shared/shared.module';
import { LAUComponent } from './lau.component';

@NgModule({
  declarations: [
    LAUComponent,
    ConsultBodyComponent,
    CreateBodyComponent,
    ModifyBodyComponent,
    CeaseBodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // RouterModule.forChild([
    //   { path: "", loadChildren: () => import('./consult-body/consult-body.component').then(m => m.ConsultBodyComponent) },
    //   { path: "create", loadChildren: () => import('./create-body/create-body.component').then(m => m.CreateBodyComponent) },
    //   { path: "modify", loadChildren: () => import('./modify-body/modify-body.component').then(m => m.ModifyBodyComponent) },
    //   { path: "cease", loadChildren: () => import('./cease-body/cease-body.component').then(m => m.CeaseBodyComponent) }
    // ]),
    SharedModule,
    ReactiveFormsModule
  ],
  exports:
  [
    LAUComponent
    // RouterModule
  ]
})
export class LAUModule{ }