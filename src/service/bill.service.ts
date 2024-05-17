import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private apiUrl = 'http://localhost:8888/bills';

  constructor(private http: HttpClient) { }

  addToCart(name: string, image: string): Observable<any> {
    // Assuming you are adding an item to the cart with the provided name and image
    // You may need to adjust the data structure based on your API requirements
    return this.http.post<any>(`${this.apiUrl}/add`, { name, image });
  }
}
