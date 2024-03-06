import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { AuthService } from "./lib/services/auth/auth.service";
=======
>>>>>>> eaa00be030fd7d3eb0f42ada3b2d1ef5d7717b0f

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
<<<<<<< HEAD
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},  AuthService ],
=======
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
>>>>>>> eaa00be030fd7d3eb0f42ada3b2d1ef5d7717b0f
  bootstrap: [AppComponent],
})
export class AppModule {}
