import { Component,OnInit, } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { FooterComponent } from '../shared/layout/footer/footer.component';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterOutlet,WelcomeComponent],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.css'
})
export class MainDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToImage() {
    this.router.navigateByUrl('/quickpay');
   
  }
}
