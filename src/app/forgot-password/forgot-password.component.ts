import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email: any;

  constructor() { }

  resetPassword() {
    // Implement logic to reset password
    console.log('Reset Password for email:', this.email);
    // Make HTTP request to backend to initiate password reset
  }
}
