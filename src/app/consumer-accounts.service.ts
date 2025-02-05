import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerAccountsService {

  private apiUrl = '';

  constructor(private http: HttpClient) { }

  getConsumerAccounts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
