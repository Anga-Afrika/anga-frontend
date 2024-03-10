import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isAuthenticated(): boolean {
    throw new Error('Method not implemented.');
  }
  
  private apiUrl = 'http://0.0.0.0:8001/'; //backend API URL

  constructor(private http: HttpClient) { }

  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, password });
  }

  // login(email: string, password: string): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/login`, { email, password });
  // }

  logout() {
    // Implement your logout logic here, such as clearing tokens or user objects from local storage
    // For example, you can clear the token from local storage
    localStorage.removeItem('token');
  }
}
