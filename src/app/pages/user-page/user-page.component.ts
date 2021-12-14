import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/shared/service.service';


@Component({
  selector: 'app-user-page',
  template: `
    <nb-layout>
      <nb-layout-header>
<div class="logo w-16 h-16">
  <img
       [src]='imgPath'
    alt="org-logo">
</div>

<div>
  <h2 class="capitalize">
    {{userName}}
  </h2>
</div>

      </nb-layout-header>
      <nb-layout-column class="flex">

        <div class="w-20 h-full flex flex-col justify-between items-center">
              <div class="modules">
                      <button class="w-14 h-14">
                      <img src="../../../assets/img-default/svg/financial module.svg" alt="">
                      </button>
                      <button class="w-14 h-14">
                        <img src="../../../assets/img-default/svg/document.svg" alt="">
                      </button>
                      <button class="w-14 h-14">
                        <img src="../../../assets/img-default/svg/modules.svg" alt="">
                      </button>
                      </div>
                      <div class="settings">
                        <button class="w-16 h-14">
                          <img src="../../../assets/img-default/svg/settings.svg" alt="">
                        </button>
                      </div>
                  </div>

        <div class="w-72 h-full bg-white rounded-lg p-4"></div>

        <div class="w-full h-full bg-white rounded-lg ml-4 p-4">
                  Page Content
                  <button class="tw-py-2 tw-px-3 bg-blue-500 tw-hover:tw-bg-nav-hover-blue rounded-md tw-text-white">Hello World</button>
        </div>
      </nb-layout-column>

    </nb-layout>
  `,

})

export class UserPageComponent implements OnInit {

  constructor(private srv:ServiceService) { }
  imgPath ='./assets/img-default/def-org-logo.png'
  // userName= this.srv.userName
  userName = sessionStorage.getItem('name')
  ngOnInit(): void {

  }

}
