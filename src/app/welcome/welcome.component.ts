import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CarouselModule,RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

}
