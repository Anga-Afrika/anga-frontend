import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordResetOtpPageRoutingModule } from './password-reset-otp-routing.module';

import { PasswordResetOtpPage } from './password-reset-otp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordResetOtpPageRoutingModule
  ],
  declarations: [PasswordResetOtpPage]
})
export class PasswordResetOtpPageModule {}
