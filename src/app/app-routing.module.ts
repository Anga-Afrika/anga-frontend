import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './lib/login-pages/login/login.page';
import { RegisterPage } from './lib/login-pages/register/register.page';
import { AuthGuard } from './lib/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./lib/login-pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./lib/login-pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'password-change',
    loadChildren: () => import('./lib/login-pages/password-change/password-change.module').then( m => m.PasswordChangePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./lib/login-pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./lib/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
// Default route

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
