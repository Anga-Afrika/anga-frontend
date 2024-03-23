import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  fetchData() {
    throw new Error('Method not implemented.');
  }
  BASE_API = environment.url;

  LOGIN_ENDPOINT = '/auth/jwt/create/';
  GETDATA_ENDPOINT = 'api/getdata/';
  CREATEDEVICE_ENDPOINT = 'api/create/';
  GETDEVICE_ENDPOINT = 'api/devices/';
  GETWEEKLYTEMP_ENDPOINT = 'api/temp-average/';
  GETWEEKLYHUMID_ENDPOINT = 'api/humidity-average/';
  TEMPTHRESHOLD_ENDPOINT = 'api/threshold/';
  HUMIDTHRESHOLD_ENDPOINT = 'api/getdata/';
  UPDATETHRESHOLDS_ENDPOINT = 'api/threshold/';
  GETHUMIDEXTREME_ENDPOINT = 'api/humidity_extremes/';
  GETTEMPEXTREME_ENDPOINT = 'api/temperature_extremes/';
  
  constructor(private http: HttpClient){}

  fetchDataFromAPI(): Observable<any> {
    return this.http.get<any>(`${this.BASE_API}${this.LOGIN_ENDPOINT}${this.GETDATA_ENDPOINT}`); // Replace 'https://api.postman.com/someendpoint' with the actual API endpoint
  }
  fetchTempData(day: number):Observable<any>{

    const query =
        `from(bucket: \"SensorData\")\n
          |> range(start: -${day}d, stop: -1d)\n
            |> filter(fn: (r) => r[\"_measurement\"] == \"mqtt_consumer\")\n 
             |> filter(fn: (r) => r[\"_field\"] == \"temperature\")\n
               |> filter(fn: (r) => r[\"host\"] == \"local.mqtt.telegraf\")\n
                 |> filter(fn: (r) => r[\"topic\"] == \"iot/device/telemetry\")\n 
                  |> aggregateWindow(every:  1m, fn: mean, createEmpty: false)\n 
                   |> yield(name: \"mean\")
         `

    return this.http.post(`${this.BASE_API}/${this.GETDATA_ENDPOINT}`, JSON.stringify({ query }),{headers:{'Accept': 'application/json', 'Content-Type': 'application/json',"Authorization":"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExMTkxMTQ0LCJpYXQiOjE3MTExOTA1NDQsImp0aSI6Ijk2NTY3YTgwM2ZkYTRiNTNhODBlY2ExMjMwMTJmZTdlIiwidXNlcl9pZCI6NH0.pZcC6hhxsMli28in7PPStW-y8fooxTyujfSbZFE6C28"}})
    
    //      (
    //   fetch(`/api/getdata`,
    //       { method: 'POST',
    //         headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
    //         body: JSON.stringify({ query })
    //       })
    // )
  }
  fetchWeeklyTemp(): Observable<any> {
    return this.http.get<any>(`${this.BASE_API}${this.LOGIN_ENDPOINT}${this.GETWEEKLYTEMP_ENDPOINT}`); // Replace 'https://api.postman.com/someendpoint' with the actual API endpoint
  }
  fetchSensors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_API}${this.LOGIN_ENDPOINT}${this.GETDEVICE_ENDPOINT}`); // Replace with your actual API endpoint
  }

  async getCompartmentData() {    
    try {
    const currentTimestamp = new Date();
    const fifteenMinutesAgo = new Date(currentTimestamp.getTime() - 15 * 60 * 1000); // 15 minutes in milliseconds
  
    const filter = {
      Timestamp: { between: [fifteenMinutesAgo.toISOString(), currentTimestamp.toISOString()] },
    };
  
      
    } catch (error) {
      console.error('Error occurred::', error);
    }
  }
}

