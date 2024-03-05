import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './login-pages/login/login.page';
import { RegisterPage } from './login-pages/register/register.page';

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },//change to dashboard
  { path: '', redirectTo: '/register', pathMatch: 'full' },

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
    path: 'register',
    loadChildren: () => import('./login-pages/register/register.module').then( m => m.RegisterPageModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },   {
    path: 'dashboard',
    loadChildren: () => import('./lib/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'storage',
    loadChildren: () => import('./lib/storage/storage.module').then( m => m.StoragePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./lib/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'readings',
    loadChildren: () => import('./lib/readings/readings.module').then( m => m.ReadingsPageModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./lib/alerts/alerts.module').then( m => m.AlertsPageModule)
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
