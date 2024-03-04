// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage implements OnInit {

//   email
  

//   passwordType: string = 'password';
//   passwordIcon: string = 'eye-off';
 
//   hideShowPassword() {
//       this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
//       this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
//   }
//   constructor() { }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }

  


// }

import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
 templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit  {
  showPassword = false;
  @ContentChild(IonInput)
  input!: IonInput;
constructor(private router: Router) {}

login() {
  //save user details to your backend
  //navigate to the login page once the user details are saved
  this.router.navigate(['/dashboard']);
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  goBackToHome() {
    this.router.navigate(['/home']);
  }
toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }
}