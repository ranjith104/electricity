import { Component, createComponent } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateUserComponent } from './create-user/create-user.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,ForgotPasswordComponent,CreateUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
