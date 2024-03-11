import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from "./lib/services/auth/auth.service";
import { HighchartsChartModule } from 'highcharts-angular';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { firebaseConfig } from "src/environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,HighchartsChartModule,ReactiveFormsModule, FormsModule, AngularFireAuthModule, AngularFirestoreModule, AngularFireModule.initializeApp(firebaseConfig) ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},  AuthService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
