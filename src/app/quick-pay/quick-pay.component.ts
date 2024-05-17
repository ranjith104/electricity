import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/layout/header/header.component';

@Component({
  selector: 'app-quick-pay',
  standalone: true,
  imports: [FormsModule, CommonModule,HeaderComponent],
  templateUrl: './quick-pay.component.html',
  styleUrl: './quick-pay.component.css'
})
export class QuickPayComponent {
  payment = {
    amount: null,
    recipient: ''
   
  };

  submitPayment() {
  
    console.log('Payment submitted:', this.payment);
   
    window.alert('Amount paid successfully!');
  }
}
