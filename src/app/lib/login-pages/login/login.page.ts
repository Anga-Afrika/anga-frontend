import { Component, ContentChild, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from "src/app/lib/services/auth/auth.service";

@Component({
  selector: 'app-login',
 templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit  {

  validationUserMessage = {
    email:[
      {type:"required", message:"Please enter your email"},
      {type:"pattern", message:"Incorrect format, try again"}
    ],
    password:[
      {type:"required", message:"Please enter your password"},
      {type:"minlength", message:"Password must be at least 8 characters"}
    ]
  }
  validationFormUser!: FormGroup;

constructor(private router: Router, public formBuilder: FormBuilder, public authService: AuthService) {}

  ngOnInit() {
    this.validationFormUser = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      
  })
}

onSubmit() {
  this.authService.login(this.validationFormUser.value).subscribe();
}

register() {
  this.authService.register(this.validationFormUser.value).subscribe((res) => {
    // Call Login to automatically login the new user
    this.authService.login(this.validationFormUser.value).subscribe();
  });
}

}
