import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './data-services/auth-guard.service';

const routes: Routes = [
  { 
    path: 'home', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'maintain',
    loadChildren: () => import('./maintain/maintain.module').then(m => m.MaintainModule),
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'utils',
    loadChildren: () => import('./utils/utils.module').then(m => m.UtilsModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
