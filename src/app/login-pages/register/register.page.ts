import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  email: string | undefined;
  password: string | undefined;

  constructor( private http:HttpClient, private router: Router ) { }

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
 
  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  register() {
    //save user details to your backend
    //navigate to the login page once the user details are saved
    this.router.navigate(['/login']);
  }
 
  obj:any;

  ngOnInit(): void {
    this.obj = this.http.get("http://127.0.0.1:8000/").subscribe(
       data => this.obj = data
    )
  }
}
