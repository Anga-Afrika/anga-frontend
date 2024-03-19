import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/app/lib/services/auth/auth.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	constructor(
		private platform: Platform,
		// private splashScreen: SplashScreen,
		// private statusBar: StatusBar,
		private authService: AuthService,
		private router: Router,
    private storage: Storage
	) {
		this.initializeApp();
	}

  async ngOnInit() {
    await this.storage.create();
  }

	initializeApp() {
		this.platform.ready().then(() => {
			// this.statusBar.styleDefault();
			// this.splashScreen.hide();
      this.router.navigate(['home']);

			this.authService.authenticationState.subscribe((state) => {
				if (state) {
					this.router.navigate(['tabs']);
				} else {
					this.router.navigate(['login']);
				}
			});
		});
	}
}