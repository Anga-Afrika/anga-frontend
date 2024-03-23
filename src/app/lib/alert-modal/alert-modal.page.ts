import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.page.html',
  styleUrls: ['./alert-modal.page.scss'],
})
export class AlertModalPage implements OnInit {
  hideHeader = false;
  lastY = 0;
  alerts: { message: string} [] = [];
  
  constructor(private modalCtrl: ModalController, private animationCtrl: AnimationController ) {}

  ngOnInit() {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  onScroll(event) {
    const currentY = event.detail.scrollTop;
 
    if (currentY > this.lastY) {
      this.hideHeader = true;
    } else {
      this.hideHeader = false;
    }
 
    this.lastY = currentY;
  }
}
