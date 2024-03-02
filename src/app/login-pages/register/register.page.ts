import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  email: string | undefined;
  password: string | undefined;

  constructor( private http:HttpClient ) { }

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
 
  hideShowPassword() {
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
 
  obj:any;

  ngOnInit(): void {
    this.obj = this.http.get("http://127.0.0.1:8000/").subscribe(
       data => this.obj = data
    )
  }
}
