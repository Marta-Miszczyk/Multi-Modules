import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/_core/login/login.component';
import { PageNotFoundComponent } from 'src/app/_core/page-not-found/page-not-found.component';
import { AuthGuard } from './_core/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: '', loadChildren: './_modules/_base/base.module#BaseModule', canLoad: [AuthGuard] },

  // otherwise redirect to login page
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
