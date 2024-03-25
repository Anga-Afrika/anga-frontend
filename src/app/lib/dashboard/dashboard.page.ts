import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service'; // Import your data service
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import { ModalController } from '@ionic/angular';
import { AlertModalPage } from '../alert-modal/alert-modal.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  hideHeader = false;
  lastY = 0;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions1: Options | undefined;
  chartOptions2: Options | undefined;
  data: any;
  fetchedData: any;

  warehouses: string[] = ['Warehouse A', 'Warehouse B', 'Warehouse C'];
  compartments: string[] = [];
  sensorIDs: string[] = [];

  constructor(private modalCtrl: ModalController, private router: Router, private dataService: DataService, private authService: AuthService) { }


  ngOnInit(): void {
    this.fetchTempData();
    this.fetchHumidData();
  }

  fetchHumidData() {
    this.dataService.fetchHumidData(60).subscribe((data: any) => {
      // this.fetchedData = data;
      console.log(data);
    });
  }

  fetchTempData() {
    this.dataService.fetchTempData(60).subscribe((data: any) => {
        console.log(data);
  });
  }

  highcharts = Highcharts;
  linechartOptions: any = {   
     chart: {
        type: "spline"
     },
     title: {
        text: "Sensor Data"
     },
     xAxis:{
        categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     },
     yAxis: {          
        title:{
           text:"Temperature °C"
        } 
     },
     tooltip: {
        valueSuffix:" °C"
     },
     series: [
        {
           name: 'Compartment 1',
           type: "spline",
           data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
        },
        {
           name: 'Compartment 2',
           type: "spline",
           data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
        },
        {
           name: 'Compartment 3',
           type: "spline",
           data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        },
        {
           name: 'Compartment 4',
           type: "spline",
           data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }
     ]

}

  barchartOptions: any = {
    tooltip: {
      fontColor: "#508D69" //sets the font color of the tooltip
    },
   title: {
     text: 'Sensor Data'
   },
   xAxis: {
     categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
     guide: {
      lineColor: "#508D69"
    }
   },
   yAxis: {
     title: {
       text: 'Value'
     },
     guide: {
      lineColor: "#508D69"
    }
   },
   series: [{
     name: 'Temperature',
     data: [20, 22, 23, 21, 19, 18, 17],
     lineColor: "#508D69",
   }, {
     name: 'Humidity',
     data: [60, 55, 50, 45, 40, 35, 30]
   }]
 };


//notif suff
async openAlertModal(){
  const modal = await this.modalCtrl.create({
    component:AlertModalPage,
  });
  return await modal.present();
}


logout() {
  this.router.navigate(['/home']);
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
