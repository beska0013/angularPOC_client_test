import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbButtonModule,
  NbCardModule, NbCheckboxModule, NbDatepickerModule,
  NbFormFieldModule, NbIconModule, NbInputModule,
  NbLayoutModule, NbSelectModule,
  NbSidebarModule,
  NbThemeModule
} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbFormFieldModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    NbIconModule,
    NbSelectModule,
    NbDatepickerModule.forRoot(),
  ],
  exports: [
    NbThemeModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbCardModule,
    NbFormFieldModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    NbIconModule,
    NbSelectModule,
    NbDatepickerModule,
  ],



})
export class NebularModuleModule { }
