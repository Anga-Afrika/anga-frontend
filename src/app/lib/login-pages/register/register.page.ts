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
    names: [{type:"required", message:"Please enter your name"}],
    email: [{type:"required", message:"Please enter your email"},
            {type:"pattern", message:"Incorrect format, try again"}],
    phone: [{type:"required", message:"Please enter your phone no."}],
    password:[
      {type:"required", message:"Please enter your password"},
      {type:"minlength", message:"Password must be at least 8 characters"}
    ],
  }
  validationFormUser!: FormGroup;
  loading: any;
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router: Router, private authService: AuthService, public loadingCtrl: LoadingController, private alertCtrl: AlertController, private navCtrl: NavController, private nav: NavController) { }

  ngOnInit() {
    this.validationFormUser = this.formBuilder.group({
      names : new FormControl('', Validators.compose([
        Validators.required,
      ])),
      phone: new FormControl('',Validators.compose([
        Validators.required,
      ])),
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
      })
  }
  registerUser(value) {
    // this.showAlert();
    try {
      this.authService.userRegistration(value).then(response => {
        console.log(response);
        if (response.user) {
          this.dismissLoading();  
          this.router.navigate(['login']);
        }
      }, error => {
        this.dismissLoading();  
        this.errorLoading(error.message);
      });
    } catch (error) {
      console.log(error);
    }
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
  
  // async showAlert() {
  //   const loading = await this.loadingCtrl.create({
  //     message: "Please wait..."
  //   })
  //    loading.present();
  // }
  
  dismissLoading() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }

  goToLogin(){
    this.nav.navigateForward(['login']);
  }
}
