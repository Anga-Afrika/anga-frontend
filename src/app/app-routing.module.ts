import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './lib/login-pages/login/login.page';
import { RegisterPage } from './lib/login-pages/register/register.page';

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
  // { path: '', redirectTo: '/home', pathMatch: 'full' },   {
  //   path: 'dashboard',
  //   loadChildren: () => import('./lib/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // },
  // {
  //   path: 'storage',
  //   loadChildren: () => import('./lib/storage/storage.module').then( m => m.StoragePageModule)
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./lib/settings/settings.module').then( m => m.SettingsPageModule)
  // },
  // {
  //   path: 'readings',
  //   loadChildren: () => import('./lib/readings/readings.module').then( m => m.ReadingsPageModule)
  // },
  // {
  //   path: 'alerts',
  //   loadChildren: () => import('./lib/alerts/alerts.module').then( m => m.AlertsPageModule)
  // },
  {
    path: 'tabs',
    loadChildren: () => import('./lib/tabs/tabs.module').then( m => m.TabsPageModule)
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
