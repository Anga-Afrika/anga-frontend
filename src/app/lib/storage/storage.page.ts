import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertModalPage } from '../alert-modal/alert-modal.page';
import { DataService } from '../services/data/data.service';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Data {
  movies: string;
}
@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StoragePage implements OnInit {
  warehouseName!: string;
  compartmentName!: string;
  sensorName!: string;
  warehouses: any[] = [];
  compartments: any[] = [];
  sensors: any[] = [];

  hideHeader = false;
  lastY = 0;
  
  constructor(private http: HttpClient, private modalCtrl: ModalController, private dataService: DataService) {}

  ngOnInit() {
  }

  


  fetchWarehouses(): void {
    this.dataService.fetchWarehouses().subscribe(data => {
      this.warehouses = data;
    });
  }

  store() {
    if (this.warehouseName) {
      // Register Warehouse
      this.warehouses.push({ name: this.warehouseName });
    }

    if (this.compartmentName) {
      // Register Compartment
      this.compartments.push({ name: this.compartmentName });
    }

    if (this.sensorName) {
      // Register Sensor
      this.sensors.push({ name: this.sensorName });
    }

    // Clear form fields
    this.warehouseName = '';
    this.compartmentName = '';
    this.sensorName = '';
  }


  //notification stuff
  async openAlertModal(){
    const modal = await this.modalCtrl.create({
      component:AlertModalPage,
    });
    return await modal.present();
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  //scroll setting
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



