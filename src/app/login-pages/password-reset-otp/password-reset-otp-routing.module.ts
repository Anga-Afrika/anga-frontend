import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordResetOtpPage } from './password-reset-otp.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordResetOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordResetOtpPageRoutingModule {}
