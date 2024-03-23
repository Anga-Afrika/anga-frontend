import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from "@angular/router";
import { AuthService } from "src/app/lib/services/auth/auth.service";
import * as Highcharts from 'highcharts';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  validationMessage = {
    email: [{type:"required", message:"Please enter your email"},
            {type:"pattern", message:"Incorrect format, try again"}],
    username: [{type:"required", message:"Please enter your name"}],
    password:[
      {type:"required", message:"Please enter your password"},
      {type:"minlength", message:"Password must be at least 8 characters"},
      { type: 'similarToUsername', message: 'Password is too similar to the username.' }
    ],
    re_password:[
      {type:"required", message:"Confirm password is required"},
      {type:"passwordMismatch", message:"Passwords do not match."}
    ],
  }
  validationFormUser!: FormGroup;
  loading: any;
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router: Router, private authService: AuthService, public loadingCtrl: LoadingController, private alertCtrl: AlertController, private navCtrl: NavController, private nav: NavController) { }

  ngOnInit() {
    this.validationFormUser = this.formBuilder.group({
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      username : new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        // this.passwordSimilarToUsernameValidator
      ])),
      re_password: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  // passwordSimilarToUsernameValidator(control) {
  //   const username = control.root.get('username').value;
  //   const password = control.value;

  //   // Check if password is too similar to username (example check)
  //   if (password.toLowerCase().includes(username.toLowerCase())) {
  //     return { similarToUsername: true };
  //   }

  //   return null;
  // }

  
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('re_password');
  
    if (passwordControl && confirmPasswordControl) {
      if (passwordControl.value === confirmPasswordControl.value) {
        confirmPasswordControl.setErrors(null);
      } else {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      }
    }
  }

  onSubmit() {
    this.authService.register(this.validationFormUser.value).subscribe();
  }


  register(value) {
    this.authService.register(this.validationFormUser.value).subscribe((res) => {
      this.authService.login(this.validationFormUser.value).subscribe();
  });
}

  
  async errorLoading(message: any) {
    const loading = await this.alertCtrl.create({
      header: "Error registering",
      message: message,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateBack(['register']);
        }
      }]
    });
    await loading.present();
  }
  
 
  dismissLoading() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }

  goToLogin(){
    this.nav.navigateForward(['login']);
  }
}
