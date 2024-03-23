import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Platform, AlertController } from '@ionic/angular';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

const TOKEN_KEY = 'access_token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_API = environment.url;

  REGISTER_ENDPOINT = '/auth/users/';
  LOGIN_ENDPOINT = '/auth/jwt/create/';
  VERIFY_ENDPOINT = '/auth/users/activation/';
  PASSWORDRESET_ENDPOINT = '/auth/users/reset_password/';
  PASSWORDCONFIRM_ENDPOINT = '/auth/users/reset_password_confirm/';

	user = null;
	authenticationState = new BehaviorSubject(false);
  
  constructor(private http: HttpClient, 
              public router: Router,
		          private helper: JwtHelperService,
		          private storage: Storage,
		          private plt: Platform,
		          private alertController: AlertController) { 
                this.plt.ready().then(() => {
                  this.checkToken();
                });
              }
              

              checkToken() {
                this.storage.get(TOKEN_KEY).then((token) => {
                  if (token) {
                    let decoded = this.helper.decodeToken(token);
                    let isExpired = this.helper.isTokenExpired(token);
            
                    if (!isExpired) {
                      this.user = decoded;
                      this.authenticationState.next(true);
                    } else {
                      this.storage.remove(TOKEN_KEY);
                    }
                  }
                });
              }
            
              register(credentials) {
                return this.http.post(`${this.BASE_API}${this.REGISTER_ENDPOINT}`, credentials).pipe(
                  catchError((e) => {
                    this.showAlert(e.error.msg);
                    throw new Error(e);
                  })
                );
              }
            
              login(credentials) {
                return this.http.post(`${this.BASE_API}${this.LOGIN_ENDPOINT}`, credentials).pipe(
                  tap((res) => {
                    this.storage.set(TOKEN_KEY, res['token']);
                    this.user = this.helper.decodeToken(res['token']);
                    this.authenticationState.next(true);
                  }),
                  catchError((e) => {
                    this.showAlert(e.error.msg);
                    throw new Error(e);
                  })
                );
              }
            
              logout() {
                this.storage.remove(TOKEN_KEY).then(() => {
                  this.authenticationState.next(false);
                });
              }
            
              getSpecialData() {
                return this.http.get(`${this.BASE_API}/api/special`).pipe(
                  catchError((e) => {
                    let status = e.status;
                    if (status === 401) {
                      this.showAlert('You are not authorized for this!');
                      this.logout();
                    }
                    throw new Error(e);
                  })
                );
              }
            
              isAuthenticated() {
                return this.authenticationState.value;
              }
            
              showAlert(msg) {
                let alert = this.alertController.create({
                  message: msg,
                  header: 'Please try again.',
                  buttons: ['OK'],
                });
                this.router.navigate(['/login']); 
                alert.then((alert) => alert.present());
              }

              getUser(): Observable<any> {
                return this.http.get<any>(`${this.BASE_API}${this.LOGIN_ENDPOINT}/username`);
              }
}
