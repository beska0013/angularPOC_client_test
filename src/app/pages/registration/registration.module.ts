import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import {RouterModule, Routes} from "@angular/router";

import {ReactiveFormsModule} from "@angular/forms";
import {NebularModuleModule} from "../../shared-modules/nebular-module/nebular-module.module";



const routes: Routes = [
  {path:'', component:RegistrationComponent}
]


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NebularModuleModule,

  ]
})
export class RegistrationModule { }
