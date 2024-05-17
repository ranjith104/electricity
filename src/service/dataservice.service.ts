import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  adEmployee: any;
  addEmploye(value: any) {
    throw new Error('Method not implemented.');
  }
  addmployee: any;
  addEmployee(value: any) {
    throw new Error('Method not implemented.');
  }
  deleteEmployee(id: any) {
    throw new Error('Method not implemented.');
  }


  constructor(private http:HttpClient) { }
  fetchData(){
    return this.http.get("http://localhost:8888/employee");
  }
  deletEmployee(id:any){
    return this.http.delete(`http://localhost:8888/employee/${id}`);
  }
  addemployee(data:any){
    return this.http.post(`http://localhost:8888/employee`,data);
  }
  getSingleDataRequest(id:any){
    return this.http.get(`http://localhost:8888/employee/${id}`);
  }
 
  updateEmployee(id:any,data:any){
    return this.http.put(`http://localhost:8888/employee/${id}`,data);
  }
  

}

