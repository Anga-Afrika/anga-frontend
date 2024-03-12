import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav: NavController) {}

  

  goToRegister(){
    this.nav.navigateForward(['register']);
  }

  goToLogin(){
    this.nav.navigateForward(['login']);
  }
}

