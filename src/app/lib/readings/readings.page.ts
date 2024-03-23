import { Component, OnInit, computed, signal } from '@angular/core';
import { Router } from "@angular/router";
import { TemperatureGaugeComponent } from 'src/app/lib/gauge/temperature-gauge/temperature-gauge.component';
import { HumidityGaugeComponent } from 'src/app/lib/gauge/humidity-gauge/humidity-gauge.component';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import { DataService } from '../services/data/data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);
@Component({
  selector: 'app-readings',
  templateUrl: './readings.page.html',
  styleUrls: ['./readings.page.scss'],
})
export class ReadingsPage {

  hideHeader = false;
  lastY = 0;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions1: Options | undefined;
  chartOptions2: Options | undefined;
//   warehouses!: any[];

  data = signal<any[]>([]);

  averageTemperature = computed(() => {
    // const conditions = this.warehouseConditions();

    if (this.data().length === 0) {
      return 0; // or any preferred default value
    }

    const totalTemperature = this.data().reduce((prev, item) => {
      // check for valid Temperature values
      if (typeof item.Temperature === 'number') {
        return prev + item.Temperature;
      }
      return prev; // Ignore non-numeric Temperature values
    }, 0);

    return totalTemperature / this.data().length;
  });

  status = computed(() => {
    // const conditions = this.warehouseConditions();

    if (this.data().length === 0) {
      return 0; // or any preferred default value
    }

    const status = this.data().reduce((item) => {
      // check for valid Temperature values
      if (item.Temperature > 24) {
        return 0;
      }
      return 1; // Ignore non-numeric Temperature values
    }, 0);

    return status;
  });

  temperature = computed(() => {
    return this.data()[0]?.Temperature;
  });

  humidity = computed(() => {
    return this.data()[0]?.Humidity;
  });

  warehouse = computed(() => {
    return this.data()[0]?.Warehouse;
  });

  compartment = computed(() => {
    return this.data()[0]?.Compartment;
  });
  
  warehouses: string[] = ['Warehouse A', 'Warehouse B', 'Warehouse C'];
  compartments: string[] = [];
  sensorIDs: string[] = [];

  selectedWarehouse: string | null = null;
  selectedCompartment: string | null = null;
  selectedSensorID: string | null = null;

  onWarehouseChange() {
    // Simulate fetching compartments based on the selected warehouse
    this.dataService.getCompartmentData().then((response)=>{
      console.log(response)
    //   this.compartments = response.map((data: { Compartment : any; })=>data.Compartment)
    })
    // this.compartments = ['Compartment 1', 'Compartment 2', 'Compartment 3'];
    // this.selectedCompartment = null;
    this.selectedSensorID = null;
  }

  onCompartmentChange() {
    // Simulate fetching sensor IDs based on the selected compartment
    this.dataService.getCompartmentData().then((response)=>{
      console.log(response)
    //   this.sensorIDs = response.map((data: { DeviceID: any; })=>data.DeviceID)
    })
    // this.sensorIDs = ['Sensor ID 1', 'Sensor ID 2', 'Sensor ID 3'];
    this.selectedSensorID = null;
  }
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.fetchSensors();
    this.fetchData();
  }

  fetchSensors() {
    this.dataService.fetchSensors().subscribe((selectedSensorID: any[]) => {
      this.sensorIDs = this.sensorIDs;
    });
  }
  
  fetchData() {
    this.dataService.fetchTempData(7).subscribe((data: any) => {
        console.log(data);
  });
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

  back() {
    // Redirect the user to the login page
    this.router.navigate(['/dashboard']);
  }


  tempchartOptions: any = {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '80%'
    },

    title: {
        text: 'Temperature'
    },

    pane: {
        startAngle: -107,
        endAngle: 107,
        background: null,
        center: ['50%', '75%'],
        size: '110%'
    },

    // the value axis
    yAxis: {
        min: -5,
        max: 28,
        tickPixelInterval: 5,
        tickPosition: 'inside',
        tickColor:  '#FFFFFF',
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
            distance: 20,
            style: {
                fontSize: '14px'
            }
        },
        lineWidth: 0,
        plotBands: [{
            from: -5,
            to: 15,
            color: '#55BF3B', // green
            thickness: 10
        }, {
            from: 15,
            to: 23,
            color: '#DDDF0D', // yellow
            thickness: 10
        }, {
            from: 23,
            to: 28,
            color: '#DF5353', // red
            thickness: 10
        }]
    },

    series: [{
        name: 'RH',
        data: [73],
        tooltip: {
            valueSuffix: '°C'
        },
        dataLabels: {
            format: '{y} °C',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '16px'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: 'gray',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'gray',
            radius: 6
        }

    }]

};

  // barchartOptions: any = {
  //   title: {
  //     text: 'Temperature and Humidity Data'
  //   },
  //   xAxis: {
  //     categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  //   },
  //   yAxis: {
  //     title: {
  //       text: 'Value'
  //     }
  //   },
  //   series: [{
  //     name: 'Temperature',
  //     data: [20, 22, 23, 21, 19, 18, 17]
  //   }, {
  //     name: 'Humidity',
  //     data: [60, 55, 50, 45, 40, 35, 30]
  //   }]
  // };
 


  humidchartOptions: any = {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '80%'
    },

    title: {
        text: 'Humidity'
    },

    pane: {
        startAngle: -107,
        endAngle: 107,
        background: null,
        center: ['50%', '75%'],
        size: '110%'
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,
        tickPixelInterval: 20,
        tickPosition: 'inside',
        tickColor:  '#FFFFFF',
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
            distance: 20,
            style: {
                fontSize: '14px'
            }
        },
        lineWidth: 0,
        plotBands: [{
            from: 40,
            to: 50,
            color: '#55BF3B', // green
            thickness: 10
        }, {
            from: 50,
            to: 65,
            color: '#DDDF0D', // yellow
            thickness: 10
        }, {
            from: 65,
            to: 100,
            color: '#DF5353', // red
            thickness: 10
        },
        {
          from: 0,
          to: 40,
          color: '#DF5353', // red
          thickness: 10
      }]
    },

    series: [{
        name: 'RH',
        data: [73],
        tooltip: {
            valueSuffix: '%'
        },
        dataLabels: {
            format: '{y} %',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '16px'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: 'gray',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'gray',
            radius: 6
        }

    }]

};


  // Function to handle data selection
//  onSelectData(dataType: string): void {
//     // Update chart options based on selected data type
//     switch (dataType) {
//       case 'daily':
//         // Update chart options for daily data
//         this.barchartOptions.xAxis.categories = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//         this.barchartOptions.series[0].data = [20, 22, 23, 21, 19, 18, 17]; // Sample temperature data
//         this.barchartOptions.series[1].data = [60, 55, 50, 45, 40, 35, 30]; // Sample humidity data
//         break;
//       case 'weekly':
//         // Update chart options for weekly data
//         // Sample data for weekly data
//         break;
//       case 'monthly':
//         // Update chart options for monthly data
//         // Sample data for monthly data
//         break;
//       default:
//         break;
//     }
//  }
}
function onSelectData(dataType: any, string: any) {
  throw new Error('Function not implemented.');
}

