import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  BASE_API = environment.url;

  LOGIN_ENDPOINT = '/auth/jwt/create/';
  GETDATA_ENDPOINT = '/api/getdata/';
  CREATEDEVICE_ENDPOINT = '/api/create/';
  GETDEVICE_ENDPOINT = '/api/devices/';
  GETWEEKLYTEMP_ENDPOINT = '/api/temp-average/';
  GETWEEKLYHUMID_ENDPOINT = '/api/humidity-average/';
  TEMPTHRESHOLD_ENDPOINT = '/api/threshold/';
  HUMIDTHRESHOLD_ENDPOINT = '/api/getdata/';
  UPDATETHRESHOLDS_ENDPOINT = '/api/threshold/';
  GETHUMIDEXTREME_ENDPOINT = '/api/humidity_extremes/';
  GETTEMPEXTREME_ENDPOINT = '/api/temperature_extremes/';
  
  constructor(private http: HttpClient){}

//   getData(): Observable<any> {
//     return this.http.get(this.apiUrl);
//   }
// }
  // getUserName(): Observable<string>{
  //   // Implement logic to fetch the user's names
  //   return this.http.get<any>(`${this.BASE_API}${this.LOGIN_ENDPOINT}/username`).pipe(
  //     map((response: any) => response.username)
  //   );
  // }

  getNumberOfWarehouses(): number {
    // Implement logic to fetch the number of warehouses
    return 5;
  }

  // Implement methods to fetch other statistics data
}

