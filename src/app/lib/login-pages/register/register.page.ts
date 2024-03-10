import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from "@angular/router";
import { AuthService } from "src/app/lib/services/auth/auth.service";
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  email: string='';
  password: string='';
  confirmPassword: string='';

  constructor( private http:HttpClient, private router: Router, private authService: AuthService) { }

  onSubmit(): void {
    if (this.password === this.confirmPassword) {
      this.authService.register(this.email, this.password)
        .subscribe(response => {
          // Handle successful sign-up
          this.router.navigate(['/login']);
        }, error => {
          // Handle sign-up error
        });
    } else {
      // Passwords do not match
    }
  }

  // register() {
  //   //save user details to your backend
  //   //navigate to the login page once the user details are saved
  //   this.router.navigate(['/login']);
  // }
 
  obj:any;

  ngOnInit(): void {
    this.obj = this.http.get("http://127.0.0.1:8000/").subscribe(
       data => this.obj = data
    )
  }
}
