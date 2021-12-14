import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule, Routes} from "@angular/router";
import { NebularModuleModule } from 'src/app/shared-modules/nebular-module/nebular-module.module';


const routes: Routes = [
  {path:'', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NebularModuleModule
  ]
})
export class HomeModule { }
