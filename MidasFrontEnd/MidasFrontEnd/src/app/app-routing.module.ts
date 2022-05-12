import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BAComponent } from './UI/BA/ba.component';
import { CeaseBodyComponent } from './UI/LAU/cease-body/cease-body.component';
import { ConsultBodyComponent } from './UI/LAU/consult-body/consult-body.component';
import { CreateBodyComponent } from './UI/LAU/create-body/create-body.component';
import { LAUComponent } from './UI/LAU/lau.component';
import { ModifyBodyComponent } from './UI/LAU/modify-body/modify-body.component';
import { HomeComponent } from './UI/MainLayout/home/home.component';
import { MainLayoutComponent } from './UI/MainLayout/main-layout.component';
import { PAComponent } from './UI/PA/pa.component';

const routes: Routes = [
  {path: "", component: MainLayoutComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'LAU', component: LAUComponent, children: [
        { path: "", component: ConsultBodyComponent},
        { path: "create", component: CreateBodyComponent},
        { path: "update", component: ModifyBodyComponent},
        { path: "cease", component: CeaseBodyComponent}
      ]},
      {path: 'BA', component: BAComponent},
      {path: 'PA', component: PAComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
