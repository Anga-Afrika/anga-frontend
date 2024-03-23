import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})


  export class SettingsPage implements OnInit{
    temperatureThreshold: number = 25;
    humidityThreshold: number = 70
    darkMode = false;
    hideHeader=false;
    lastY= 0;

     constructor() {}

  ngOnInit() {}

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }
  
    increaseThreshold() {
      this.temperatureThreshold++;
    }
  
    decreaseThreshold() {
      this.temperatureThreshold--;
      
    }

    increaseHumidity() {
      this.humidityThreshold++;
    }
  
    decreaseHumidity() {
      this.humidityThreshold--;
      
    }
  }
  

  


