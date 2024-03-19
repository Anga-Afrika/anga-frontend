import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TemperatureGaugeComponent } from 'src/app/lib/gauge/temperature-gauge/temperature-gauge.component';
import { HumidityGaugeComponent } from 'src/app/lib/gauge/humidity-gauge/humidity-gauge.component';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

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

  constructor(private router: Router) {}
  
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

  back() {
    // Redirect the user to the login page
    this.router.navigate(['/dashboard']);
  }


  linechartOptions = {
    chart: {
      type: 'solidgauge',
      height: '100%'
    },
    title: {
      text: 'Temperature Gauge'
    },
    tooltip: {
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
        fontSize: '16px'
      },
      valueSuffix: '°C',
      pointFormat: '<span style="font-size:2em; color: {point.color};">{point.y}</span>'
    },
    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{
        outerRadius: '112%',
        innerRadius: '88%',
        // backgroundColor: Highcharts.color(defaultColor)
        //   .setOpacity(0.3)
        //   .get(),
        borderWidth: 0
      }]
    },
    yAxis: {
      min: -10,
      max: 30,
      lineWidth: 0,
      tickPositions: [],
      labels: {
        enabled: false
      }
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true
      }
    },
    series: [{
      name: 'Temperature',
      data: [{
        // color: Highcharts.color(defaultColor).setOpacity(0.5).get(),
        radius: '112%',
        innerRadius: '88%',
        y: 20
      }]
    }]
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
