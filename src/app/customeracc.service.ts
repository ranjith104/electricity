import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomeraccService
 
 
{
  baseUrl="http://localhost:8888";
  mongoDBUrl="http://localhost:7777/users";
 
  constructor(private _http:HttpClient) { }
  getRequestMongo(){
    return this._http.get(this.mongoDBUrl)
  }
 
  //get Request
  getRequest(tableName:any){
    return this._http.get(`${this.baseUrl}/${tableName}`);
  }
  //delete Request
  deleteRequest(tableName:any,id:any){
    return this._http.delete(`${this.baseUrl}/${tableName}/${id}`);
  }
  // post Request
   postRequest(tableName:any,data:any){
    return this._http.post(`${this.baseUrl}/${tableName}`,data);
   }
   //single user get Request
   singleUserGetRequest(tableName:any,id:any){
    return this._http.get(`${this.baseUrl}/${tableName}/${id}`);
   }
 
    // put Request
    putRequest(tableName:any,id:any,data:any){
      return this._http.put(`${this.baseUrl}/${tableName}/${id}`,data);
     }
 
     //how to add user into session storage
     signIn(user:any){
       sessionStorage.setItem("customer",user);
     }
     //how to remove user from session stoage
     signOut(){
      sessionStorage.clear();
     }
     createUser(user: any): Observable<any> {
      return this._http.post('/api/customer', user);
 
}
}