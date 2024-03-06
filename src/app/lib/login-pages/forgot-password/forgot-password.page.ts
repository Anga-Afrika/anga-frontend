import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: string ='';

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
  
  continue() {
    // Check if the username or email exists (you can implement this logic)
    const usernameExists = this.checkUsernameExists(this.email);

    // If the username exists, navigate to the password change page
    if (usernameExists) {
      this.router.navigate(['/password-change']);
    } else {
      // Handle case when username or email does not exist
      // For example, show an error message
      alert('Username or email does not exist. Please try again.');
    }
  }

  checkUsernameExists(username: string): boolean {
    // Implement logic to check if the username or email exists (e.g., call an API)
    // For demonstration purposes, assume the username exists
    return true;
  }
}
