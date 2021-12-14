import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Observable} from "rxjs";
import { ServiceService } from 'src/app/services/shared/service.service';
import {CrudService} from "../../services/crud/crud.service";

@Component({
  selector: 'app-log-in',
  template: `
  <nb-layout>
    <nb-layout-column class="flex justify-center items-center">
      <nb-card class="w-80 h-96">
        <nb-card-body>
          <form
          class="h-full flex flex-col justify-around"
          [formGroup]="logInForm"
          (submit)="onSubmit()">
            <nb-form-field>
              <input
                type="text"
                nbInput
                formControlName="_userName">
            </nb-form-field>

            <nb-form-field>
              <input
                [type]="getInputType()"
                nbInput
                formControlName="_password">
              <button
                nbSuffix
                nbButton
                ghost
                (click)="toggleShowPassword()">
                <nb-icon
                  [icon]="showPassword ? 'eye-outline' : 'eye-off-2-outline'"
                  pack="eva"
                  [attr.aria-label]="showPassword ? 'hide password' : 'show password'">
                </nb-icon>
              </button>
            </nb-form-field>

        <div class="flex flex-col items-center w-full">
          <button
            nbButton
            outline
          class="w-full">
            Submit
          </button>
          <nb-checkbox
            status="basic"
          class="my-4"
          formControlName="_checkbox">
            Remember me
          </nb-checkbox>
        </div>
          </form>
        </nb-card-body>
      </nb-card>
    </nb-layout-column>
  </nb-layout>
  `,

})
export class LogInComponent implements OnInit {
  private userName: any;

  constructor(private route:Router,private srv:ServiceService,private crudSrv:CrudService) { }

  nameObservable = new Observable(observer=>{
   observer.next(this.logInForm.value._userName);
  })

  showPassword = true;

  logInForm = new FormGroup({
    _userName: new FormControl('',Validators.required),
    _password: new FormControl('',Validators.required),
    _checkbox:new FormControl(false)
  })




  getInputType() {
    if (this.showPassword) return 'text';
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(){
    if(this.logInForm.valid){
      this.crudSrv.getUser().subscribe(data => {
        console.dir(data)
      })
      sessionStorage.setItem('name',this.logInForm.value. _userName)
      // this.srv.getUserName(this.nameObservable)
      this.route.navigate(['user-page']).then(r => console.log(r))
    }
    else{console.log('Error')}

  }


  ngOnInit(): void {

  }
}
