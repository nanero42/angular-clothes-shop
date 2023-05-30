import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./pages/home-page/home-page.module").then(m => m.HomePageModule),
  },
  {
    path: 'signin',
    loadChildren: () => import("./pages/signin-page/signin-page.module").then(m => m.SigninPageModule),
  },
  {
    path: 'signup',
    loadChildren: () => import("./pages/signup-page/signup-page.module").then(m => m.SignupPageModule),
  },
  {
    path: '**',
    loadChildren: () => import("./pages/error-page/error-page.module").then(m => m.ErrorPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
