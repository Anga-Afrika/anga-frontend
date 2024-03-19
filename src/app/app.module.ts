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
// import { AngularFireAuthModule } from "@angular/fire/compat/auth";
// import { AngularFireModule } from "@angular/fire/compat";
// import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
// import { firebaseConfig } from "src/environments/environment";
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage-angular';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';

export function jwtOptionsFactory(storage) {
	return {
		tokenGetter: () => {
			return storage.get('access_token');
		},
		whitelistedDomains: ['anga-ts1r.onrender.com']
	};
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule, 
            HttpClientModule,
            HighchartsChartModule,
            ReactiveFormsModule, 
            FormsModule, 
            // AngularFireAuthModule, 
            // AngularFirestoreModule, 
            // AngularFireModule.initializeApp(firebaseConfig) ,
            IonicStorageModule.forRoot(),
            MatDialogModule,
		JwtModule.forRoot({
			jwtOptionsProvider: {
				provide: JWT_OPTIONS,
				useFactory: jwtOptionsFactory,
				deps: [Storage]
			}
		})
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, provideAnimationsAsync() ],
  bootstrap: [AppComponent],
})
export class AppModule {}
