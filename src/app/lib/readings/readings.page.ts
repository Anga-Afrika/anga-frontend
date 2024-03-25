import { Component, OnInit, computed, effect, signal, ChangeDetectorRef } from '@angular/core';
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

  currentTemp = signal(0);
  currentHumid = signal(0);
  constructor(private dataService: DataService, private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchSensors();
    this.fetchData();
    this.cdr.detectChanges();
    setInterval(() => this.fetchData(), 300000);
  }

  fetchSensors() {
    this.dataService.fetchSensors().subscribe((selectedSensorID: any[]) => {
      this.sensorIDs = this.sensorIDs;
    });
  }
  
  fetchData() {
    this.dataService.fetchTempData(60).subscribe((data: any) => {
      const readings= Object.values(data);
      const value = readings.length-1;
      // console.log(data[value],value,readings[value]);
        this.currentTemp.set(Number(value)) ;
        this.cdr.detectChanges();
        console.log(this.warehouses.length);
  });
  this.dataService.fetchHumidData(7).subscribe((data: any) => {
    const readings= Object.values(data);
      const value = readings.length-1;
      // console.log(data[value],value,readings[value]);
        this.currentHumid.set(Number(value)) ;
        this.cdr.detectChanges();
});
this.cdr.detectChanges();
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
        tickPixelInterval: 10,
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
        data: [this.currentTemp],
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
            from: 0,
            to: 50,
            color: '#55BF3B', // green
            thickness: 5
        }, {
            from: 50,
            to: 65,
            color: '#DDDF0D', // yellow
            thickness: 5
        }, {
            from: 65,
            to: 100,
            color: '#DF5353', // red
            thickness: 5
        },
        {
          from: 0,
          to: 40,
          color: '#DF5353', // red
          thickness: 5
      }]
    },

    series: [{
        name: 'RH',
        data: [this.currentHumid],
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

 
getData(){
    
}
sensorData: any[] = [
  {
    sensorID: 'Sensor 1',
    warehouse: 'Warehouse A',
    compartment: 'Compartment 1',
    timestamp: '2023-08-21 10:00:00',
    temperature: '25°C',
    humidity: '60%',
  },
  {
    sensorID: 'Sensor 2',
    warehouse: 'Warehouse B',
    compartment: 'Compartment 2',
    timestamp: '2023-08-21 10:00:00',
    temperature: '20°C',
    humidity: '40%',
  },
  {
    sensorID: 'Sensor 3',
    warehouse: 'Warehouse C',
    compartment: 'Compartment 3',
    timestamp: '2023-08-21 10:00:00',
    temperature: '20°C',
    humidity: '40%',
  },
  {
    sensorID: 'Sensor 4',
    warehouse: 'Warehouse D',
    compartment: 'Compartment 4',
    timestamp: '2023-08-21 10:00:00',
    temperature: '20°C',
    humidity: '40%',
  },
  {
    sensorID: 'Sensor 5',
    warehouse: 'Warehouse E',
    compartment: 'Compartment 5',
    timestamp: '2023-08-21 10:00:00',
    temperature: '20°C',
    humidity: '40%',
  },
];

onWarehouseChange() {
  this.dataService.getCompartmentData().then((response: any)=>{
    console.log(response)
    this.compartments = (response as Array<any>).map((data: { Compartment : any; })=>data.Compartment)
  })
  this.compartments = ['Apples 1', 'Apples 2', 'Lettuce 1'];
  this.selectedCompartment = null;
  this.selectedSensorID = null;
}

onCompartmentChange() {
  this.dataService.getCompartmentData().then((response: any)=>{
    console.log(response)
    this.sensorIDs = (response as Array<any>).map((data: { DeviceID: any; })=>data.DeviceID)
  })
  this.sensorIDs = ['Sensor 11', 'Sensor 12', 'Sensor 13'];
  this.selectedSensorID = null;
}
}
