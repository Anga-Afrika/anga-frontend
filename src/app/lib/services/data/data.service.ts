import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  temperature!: number
  humidity!: number

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
  UPDATETHRESHOLDS_ENDPOINT = 'api/threshold/';
  GETHUMIDEXTREME_ENDPOINT = 'api/humidity_extremes/';
  GETTEMPEXTREME_ENDPOINT = 'api/temperature_extremes/';
  CREATECOMPARTMENT_ENDPOINT = 'api/compartment/create/';
  GETCOMPARTMENT_ENDPOINT = 'api/compartments/';
  CREATEWAREHOUSE_ENDPOINT = 'api/warehouse/create';
  GETWAREHOUSE_ENDPOINT = 'api/warehouse/create/';

  constructor(private http: HttpClient) {}
  fetchDataFromAPI(): Observable<any> {
    return this.http.get<any>(
      `${this.BASE_API}${this.LOGIN_ENDPOINT}${this.GETDATA_ENDPOINT}`
    ); 
  }
  updateThresholds(humidity:number, temperature:number){
    return this.http.post(`${this.BASE_API}/${this.UPDATETHRESHOLDS_ENDPOINT}`, {humidity, temperature})
  }
  fetchTempData(day: number): Observable<any> {
    const query = `from(bucket: \"SensorData\")\n
          |> range(start: -${day}d, stop: -1d)\n
            |> filter(fn: (r) => r[\"_measurement\"] == \"mqtt_consumer\")\n 
             |> filter(fn: (r) => r[\"_field\"] == \"temperature\")\n
               |> filter(fn: (r) => r[\"host\"] == \"local.mqtt.telegraf\")\n
                 |> filter(fn: (r) => r[\"topic\"] == \"iot/device/telemetry\")\n 
                  |> aggregateWindow(every:  1m, fn: mean, createEmpty: false)\n 
                   |> yield(name: \"mean\")
         `;

    return this.http.post(
      `${this.BASE_API}/${this.GETDATA_ENDPOINT}`,
      JSON.stringify({ query }),
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExMTkxMTQ0LCJpYXQiOjE3MTExOTA1NDQsImp0aSI6Ijk2NTY3YTgwM2ZkYTRiNTNhODBlY2ExMjMwMTJmZTdlIiwidXNlcl9pZCI6NH0.pZcC6hhxsMli28in7PPStW-y8fooxTyujfSbZFE6C28',
        },
      }
    );
  }
  fetchHumidData(day: number): Observable<any> {
    const query = `from(bucket: \"SensorData\")\n
          |> range(start: -${day}d, stop: -1d)\n
            |> filter(fn: (r) => r[\"_measurement\"] == \"mqtt_consumer\")\n 
             |> filter(fn: (r) => r[\"_field\"] == \"humidity\")\n
               |> filter(fn: (r) => r[\"host\"] == \"local.mqtt.telegraf\")\n
                 |> filter(fn: (r) => r[\"topic\"] == \"iot/device/telemetry\")\n 
                  |> aggregateWindow(every:  1m, fn: mean, createEmpty: false)\n 
                   |> yield(name: \"mean\")
         `;

    return this.http.post(
      `${this.BASE_API}/${this.GETDATA_ENDPOINT}`,
      JSON.stringify({ query }),
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization:
            'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExMTkxMTQ0LCJpYXQiOjE3MTExOTA1NDQsImp0aSI6Ijk2NTY3YTgwM2ZkYTRiNTNhODBlY2ExMjMwMTJmZTdlIiwidXNlcl9pZCI6NH0.pZcC6hhxsMli28in7PPStW-y8fooxTyujfSbZFE6C28',
        },
      }
    );
  }

  fetchWeeklyTemp(): Observable<any> {
    return this.http.get<any>(
      `${this.BASE_API}${this.LOGIN_ENDPOINT}${this.GETWEEKLYTEMP_ENDPOINT}`
    ); 
  }
  fetchWeeklyHumid(): Observable<any> {
    return this.http.get<any>(
      `${this.BASE_API}${this.LOGIN_ENDPOINT}${this.GETWEEKLYTEMP_ENDPOINT}`
    ); 
  }
  
  registerSensor(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.BASE_API}${this.LOGIN_ENDPOINT}${this.CREATEDEVICE_ENDPOINT}`
    ); 
  }
  fetchSensors(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.BASE_API}${this.LOGIN_ENDPOINT}${this.GETDEVICE_ENDPOINT}`
    ); 
  }
  registerCompartment(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.BASE_API}${this.LOGIN_ENDPOINT}${this.CREATECOMPARTMENT_ENDPOINT}`
    ); 
  }
  fetchCompartments(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.BASE_API}${this.LOGIN_ENDPOINT}${this.GETCOMPARTMENT_ENDPOINT}`
    ); 
  }
  registerWarehouse(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.BASE_API}${this.LOGIN_ENDPOINT}${this.CREATEWAREHOUSE_ENDPOINT}`
    ); 
  }
  fetchWarehouses(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.BASE_API}${this.LOGIN_ENDPOINT}${this.GETWAREHOUSE_ENDPOINT}`
    ); 
  }

  
  async getCompartmentData() {
    try {
      const currentTimestamp = new Date();
      const fifteenMinutesAgo = new Date(
        currentTimestamp.getTime() - 15 * 60 * 1000
      ); // 15 minutes in milliseconds

      const filter = {
        Timestamp: {
          between: [
            fifteenMinutesAgo.toISOString(),
            currentTimestamp.toISOString(),
          ],
        },
      };
    } catch (error) {
      console.error('Error occurred::', error);
    }
  }
}
