import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from "./lib/services/auth/auth.service";
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,HighchartsChartModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},  AuthService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
