import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <nb-layout>
      <nb-layout-header>
        Logo
       <ul class="flex">
         <li class="mx-4">
           <a routerLink="log-in" title="Log in">Log In</a>
         </li>
         <li>
           <a routerLink="registration" title="Registration">Create Organization</a>
         </li>
       </ul>
      </nb-layout-header>
      <nb-layout-column>
        <nb-card>
          <nb-card-body>
            <form>
              <p>home works</p>
            </form>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `,

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
