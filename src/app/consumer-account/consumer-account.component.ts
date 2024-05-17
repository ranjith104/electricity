// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { RouterLink } from '@angular/router';
// import { HeaderComponent } from '../shared/layout/header/header.component';

// interface Consumer {
//   consumerNo: number;
//   name: string;
//   totalAmountPaid: number;
//   dueDate: string;
// }

// @Component({
//   selector: 'app-consumer-account',
//   templateUrl: './consumer-account.component.html',
//   standalone: true,
//   styleUrls: ['./consumer-account.component.css'],
//   imports: [RouterLink,HeaderComponent]
// })
// export class ConsumerAccountComponent {
//   consumers: Consumer[] = [
//     { consumerNo: 1, name: 'ranjit', totalAmountPaid: 200, dueDate: '2024-04-30' },
//     { consumerNo: 1, name: 'akash', totalAmountPaid: 0, dueDate: '2024-04-30' },
//     { consumerNo: 1, name: 'mary', totalAmountPaid: 200, dueDate: '2024-04-30' },
//   ];

//   constructor(private router: Router) { }

//   ngOnInit(): void {
//   }

//   isBillPaid(totalAmountPaid: number): boolean {
//     return totalAmountPaid > 0;
//   }

  
//   payBill(): void {
//     this.router.navigate(['/quickpay']);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { RouterLink } from '@angular/router';


interface Consumer {
  consumerNo: number;
  name: string;
  totalAmountPaid: number;
  dueDate: string;
}

@Component({
  selector: 'app-consumer-account',
  templateUrl: './consumer-account.component.html',
  standalone:true,
  imports:[CommonModule,HeaderComponent,RouterLink],
  styleUrls: ['./consumer-account.component.css']
})

export class ConsumerAccountComponent implements OnInit {
  consumers: Consumer[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchConsumerData();
  }

  fetchConsumerData(): void {
    this.http.get<any[]>('http://localhost:8888/customer') 
      .subscribe(data => {
        this.consumers = data;
      }, error => {
        console.error('Error fetching data:', error);
      });
  }

  isBillPaid(totalAmountPaid: number): boolean {
    return totalAmountPaid > 0;
  }

  payBill(): void {
     
    
  }
}

