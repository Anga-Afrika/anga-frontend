import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {path:"dashboard", loadChildren:()=> import('src/app/lib/dashboard/dashboard.module').then(res => res.DashboardPageModule)},
      {path:"readings", loadChildren:()=> import('src/app/lib/readings/readings.module').then(res => res.ReadingsPageModule)},
      {path:"storage", loadChildren:()=> import('src/app/lib/storage/storage.module').then(res => res.StoragePageModule)},
      {path:"settings", loadChildren:()=> import('src/app/lib/settings/settings.module').then(res => res.SettingsPageModule)},
    ]
  },
  {
    path:"",
    redirectTo:"tabs/dashboard",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
