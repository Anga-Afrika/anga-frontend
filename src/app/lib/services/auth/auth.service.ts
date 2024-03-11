import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isAuthenticated(): boolean {
    throw new Error('Method not implemented.');
  }
  
  private apiUrl = 'http://0.0.0.0:8001/'; //backend API URL

  constructor(private http: HttpClient, public auth: AngularFireAuth) { }

  loginFireAuth(value){
    return new Promise<any> ((resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
  }

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
