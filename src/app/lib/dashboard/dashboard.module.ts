import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { HighchartsChartModule } from 'highcharts-angular';
// import { ChartModule } from 'highcharts-angular'; 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    HighchartsChartModule,
    // ChartModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
