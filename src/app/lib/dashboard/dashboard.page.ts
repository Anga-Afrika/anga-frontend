import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service'; // Import your data service
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  username: string | undefined;
  numberOfWarehouses: number | undefined;
  hideHeader = false;
  lastY = 0;
  // Declare other statistic variables
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions1: Options | undefined;
  chartOptions2: Options | undefined;

  constructor(private router: Router, private dataService: DataService, private authService: AuthService) { }


  onScroll(event) {
   const currentY = event.detail.scrollTop;

   if (currentY > this.lastY) {
     // Scrolling down
     this.hideHeader = true;
   } else {
     // Scrolling up
     this.hideHeader = false;
   }

   this.lastY = currentY;
 }
  logout() {
    // Call the logout method from the authentication service
   //  this.authService.logout();
    // Redirect the user to the login page
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    // Fetch dynamic data from the data service
    // this.username = this.dataService.getUserName();
    this.numberOfWarehouses = this.dataService.getNumberOfWarehouses();
    // Fetch other statistics data
  }

  highcharts = Highcharts;
  linechartOptions: any = {   
     chart: {
        type: "spline"
     },
     title: {
        text: "Monthly Average Temperature"
     },
     subtitle: {
      //   text: "Source: WorldClimate.com"
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
   title: {
     text: 'Temperature and Humidity Data'
   },
   xAxis: {
     categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
   },
   yAxis: {
     title: {
       text: 'Value'
     }
   },
   series: [{
     name: 'Temperature',
     data: [20, 22, 23, 21, 19, 18, 17]
   }, {
     name: 'Humidity',
     data: [60, 55, 50, 45, 40, 35, 30]
   }]
 };

 // Function to handle data selection
onSelectData(dataType: string): void {
   // Update chart options based on selected data type
   switch (dataType) {
     case 'daily':
       // Update chart options for daily data
       this.barchartOptions.xAxis.categories = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
       this.barchartOptions.series[0].data = [20, 22, 23, 21, 19, 18, 17]; // Sample temperature data
       this.barchartOptions.series[1].data = [60, 55, 50, 45, 40, 35, 30]; // Sample humidity data
       break;
     case 'weekly':
       // Update chart options for weekly data
       // Sample data for weekly data
       break;
     case 'monthly':
       // Update chart options for monthly data
       // Sample data for monthly data
       break;
     default:
       break;
   }
}


}
