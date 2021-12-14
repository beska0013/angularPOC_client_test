import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'log-in',
    loadChildren: ()=> import('./pages/log-in/log-in.module').then(m => m.LogInModule)
  },
  {
    path:'registration',
    loadChildren: ()=> import('./pages/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path:'user-page',
    loadChildren: ()=> import('./pages/user-page/user-page.module').then(m => m.UserPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
