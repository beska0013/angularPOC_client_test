import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import {RouterModule, Routes} from "@angular/router";
import {NebularModuleModule} from "../../shared-modules/nebular-module/nebular-module.module";

const routes: Routes = [
  {path:'', component: LogInComponent}
]


@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NebularModuleModule
  ]
})
export class LogInModule { }
