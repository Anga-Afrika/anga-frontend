import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import { AuthService } from "./lib/services/auth/auth.service";
=======
>>>>>>> eaa00be030fd7d3eb0f42ada3b2d1ef5d7717b0f


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
<<<<<<< HEAD
  constructor(private http: HttpClient, private authService: AuthService) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
=======
  constructor(private http: HttpClient) {}
>>>>>>> eaa00be030fd7d3eb0f42ada3b2d1ef5d7717b0f
}
