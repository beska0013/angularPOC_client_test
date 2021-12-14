import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  userName ="";
  getUserName(userName:Observable<any>){
    userName.subscribe(name=> {
     this.userName = name
    })
  }
}
