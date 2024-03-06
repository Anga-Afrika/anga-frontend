import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordResetOtpPage } from './password-reset-otp.page';

describe('PasswordResetOtpPage', () => {
  let component: PasswordResetOtpPage;
  let fixture: ComponentFixture<PasswordResetOtpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasswordResetOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
