import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {User} from "../../models/user.model";
import {catchError, retry} from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //Rest Api
  endpoint = environment.api.users;

  constructor(private http: HttpClient) {}

  processError(err: { error: { message: string; }; status: any; message: any; }) {
    let message = '';

    err.error instanceof ErrorEvent ?  message = err.error.message:
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;

    // console.log(message);
    return throwError(message);
  }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
//Post//
  addUser = (data:User):Observable<User> => {
    return this.http.post<User>(
      this.endpoint,
      JSON.stringify(data),
      this.httpHeader).pipe(
      retry(0),
      catchError(this.processError)
    )

  }
  getUser = ():Observable<User[]>=> this.http.get<User[]>(this.endpoint)


}
