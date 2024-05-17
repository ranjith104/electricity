import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  username: any;
  email: any;
  password:any;

  constructor() { }

  createUser() {
    
    console.log('Creating new user:', this.username, this.email, this.password);
    
  }
}
