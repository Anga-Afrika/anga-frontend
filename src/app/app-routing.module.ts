import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login-pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./login-pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'password-change',
    loadChildren: () => import('./login-pages/password-change/password-change.module').then( m => m.PasswordChangePageModule)
  },
  {
    path: 'password-reset-otp',
    loadChildren: () => import('./login-pages/password-reset-otp/password-reset-otp.module').then( m => m.PasswordResetOtpPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./login-pages/register/register.module').then( m => m.RegisterPageModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
