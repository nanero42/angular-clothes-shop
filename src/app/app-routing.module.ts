import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./pages/home-page/home-page.module").then(m => m.HomePageModule),
  },
  {
    path: 'auth',
    loadChildren: () => import("./pages/auth-page/auth-page.module").then(m => m.AuthPageModule),
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
