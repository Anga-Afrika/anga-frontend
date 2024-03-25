import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})


  export class SettingsPage implements OnInit{
    temperature: number = 25;
    humidity: number = 70;
    darkMode = false;
    hideHeader=false;
    lastY= 0;
    threshold!: number;

     constructor(private http: HttpClient, private dataService: DataService) {}

  ngOnInit() {}

  setThresholds() {
    this.dataService.updateThresholds(this.humidity, this.temperature).subscribe((data: any) => {
        console.log(data);
  });
  }
   
  }
  

  


