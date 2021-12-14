import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { User } from 'src/app/models/user.model';
import { CrudService } from 'src/app/services/crud/crud.service';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-registration',
  template: `
    <nb-layout>
      <nb-layout-column class="flex justify-center items-center">
        <nb-card class="w-80 h-96">
          <nb-card-body>
            <form
              class="h-full flex flex-col justify-around"
            [formGroup]="registForm"
            (submit)="onSubmit()">
              <nb-form-field>
                <input
                  formControlName="_name"
                  placeholder="Your Name"
                  type="text"
                  nbInput>
              </nb-form-field>

              <nb-form-field>
                <input
                  formControlName="_lastName"
                  placeholder="Your Last Name"
                  nbInput>
              </nb-form-field>
              <nb-form-field>
                <input
                  formControlName="_userName"
                  placeholder="New User Name"
                  nbInput>
              </nb-form-field>
              <nb-form-field>
                <input
                  formControlName="_dateOfBirth"
                  [nbDatepicker]="datepicker"
                  placeholder="Your Date of Birth"
                  nbInput>
                <nb-datepicker #datepicker></nb-datepicker>
              </nb-form-field>

              <nb-form-field>
                <input
                  formControlName="_email"
                  placeholder="Your Email"
                  nbInput>
              </nb-form-field>
              <nb-form-field>
              <nb-select
               formControlName="_gender"
              placeholder="Gender">
                <nb-option
                  *ngFor="let gender of genderOptions"
                  [value]= gender >
                  {{gender}}
                </nb-option>
              </nb-select>
              </nb-form-field>
<!--              <nb-form-field>-->
<!--                <input type="file"-->
<!--                  formControlName="_email"-->
<!--                  placeholder="Your Email"-->
<!--                  nbInput>-->
<!--              </nb-form-field>-->
              <div class="flex flex-col items-center w-full">
                <button
                  nbButton
                  outline
                  class="w-full">
                  Submit
                </button>

              </div>
            </form>

          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>`,

})
export class RegistrationComponent implements OnInit {

  constructor(private crudSrv:CrudService) { }
  genderOptions = [
    'Male','Female','Other'
  ]


registForm = new FormGroup({
  _name: new FormControl('',Validators.required),
  _lastName: new FormControl('',Validators.required),
  _userName: new FormControl('',Validators.required),
  _dateOfBirth: new FormControl('',Validators.required),
  _gender: new FormControl('',Validators.required),
  _email: new FormControl('',Validators.required),
  // _orgName: new FormControl('',Validators.required)
})

  onSubmit(){
    let user:User
    if(this.registForm.valid){
      user = new User(
        this.registForm.value._name,
        this.registForm.value._lastName,
        this.registForm.value._userName,
        this.registForm.value._dateOfBirth,
        this.registForm.value._email,
        this.registForm.value._gender
      )

      this.crudSrv.addUser(user).subscribe(data => {
        console.dir(data)
      })
    }
  }

  ngOnInit(): void {}

}
