import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from "src/app/lib/services/auth/auth.service";

@Component({
  selector: 'app-login',
 templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit  {
  email: string = '';
  password: string = '';

  loginForm = {}; //FormGroup

  showPassword = false;
  @ContentChild(IonInput)
  input!: IonInput;
constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {}

register() {
  this.authService.register(this.email, this.password).subscribe(
    (    response: any) => {
      console.log('Login successful:', response);
      // Handle success (e.g., redirect to dashboard)
    },
    (    error: any) => {
      console.error('Login failed:', error);
      // Handle error (e.g., display error message)
    }
  );
}

isAuthenticated(): boolean {
  //authentication logic here
  // For example, check if the user is logged in
  // You may use a token, user object, or any other authentication mechanism
  return true; // Return true if authenticated, false otherwise
}

// Implement the navigateToDashboard function
navigateToDashboard() {
  // Navigate to the dashboard page after successful authentication
  this.router.navigate(['/dashboard']);
}

login() {
  // Here you would typically perform authentication
  if (this.email === 'user@example.com' && this.password === 'password') {
    this.router.navigate(['/dashboard']);
  } else {
    alert('Invalid email or password. Please try again.');
  }
}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  goBackToHome() {
    this.router.navigate(['/home']);
  }
}