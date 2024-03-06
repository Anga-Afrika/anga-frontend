import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.page.html',
  styleUrls: ['./password-change.page.scss'],
})
export class PasswordChangePage implements OnInit {

  email: any;
  password: any;

  loginForm: FormGroup | undefined;

  showPassword = false;
  @ContentChild(IonInput)
  input!: IonInput;
constructor(private router: Router, private formBuilder: FormBuilder) {}

login() {
  //save user details to your backend
  //navigate to the login page once the user details are saved
  this.router.navigate(['/dashboard']);
}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // Add more form controls as needed
    });
  }
  goBackToHome() {
    this.router.navigate(['/home']);
  }
toggleShow() {
    this.showPassword = !this.showPassword;
    this.input.type = this.showPassword ? 'text' : 'password';
  }

}
