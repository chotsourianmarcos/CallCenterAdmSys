import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LAUModule } from '../LAU/lau.module';

import { HomeComponent } from './home/home.component';
import { BAComponent } from '../BA/ba.component';
import { PAComponent } from '../PA/pa.component';
import { LAUComponent } from '../LAU/lau.component';

import { MainHeaderComponent } from './main-header/main-header.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { BAModule } from '../BA/ba.module';
import { PAModule } from '../PA/pa.module';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    MainHeaderComponent,
    HomeComponent,
    MainNavBarComponent,
    MainFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // RouterModule.forChild([
    //   {path: "Home",component: HomeComponent},
    //   {path: "LAU",component: LAUComponent},
    //   {path: "BA", component: BAComponent},
    //   {path: "PA", component: PAComponent}
    // ]),
    BAModule,
    LAUModule,
    PAModule
  ],
  exports:
  [
    HomeComponent,
    LAUComponent,
    BAComponent,
    PAComponent
    // RouterModule
  ]
})
export class MainLayoutModule { }
