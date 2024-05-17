import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8888/consumers'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getBillDetails(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/bill-details/${userId}`);
  }

  getPaymentHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/payment-history`);
  }
}
