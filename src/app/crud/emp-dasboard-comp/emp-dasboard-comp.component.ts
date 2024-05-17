
import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

 import { Router, RouterLink } from '@angular/router';
import { DataserviceService } from '../../../service/dataservice.service';
import { GlobalServiceService } from '../../../service/globalservice.service';
import { HeaderComponent } from '../../shared/layout/header/header.component';



@Component({
  selector: 'app-emp-dasboard-comp',
  standalone: true,
  imports: [CommonModule,RouterLink,HeaderComponent],
  templateUrl: './emp-dasboard-comp.component.html',
  styleUrl: './emp-dasboard-comp.component.css'
})
export class EmpDasboardCompComponent {
  empData:any;
  loading: boolean =true
  errorMessage: any;
  constructor(private _dbServ:DataserviceService,private _globalServ:GlobalServiceService){}
 
  ngOnInit(){
    // this.getData();
    this.getEmpData();
  }

     getData(){
      this._dbServ.fetchData().subscribe((res)=>{
        console.log(res);
        this.empData = res;


     })
    }

    getEmpData(){
      this._globalServ.getRequest("employee").subscribe((res)=>{
        this.empData = res;
      },(error)=>{
        console.log("error caught in emp-dash component");
        this.loading=false;
        this.errorMessage = error;
        console.log(error.Message);
     
     
      })
    }
     deleteData(id:any){
      this._dbServ.deletEmployee(id).subscribe(()=>{
        window.alert ("data deleted successfully");
        this.getData();
      })
     }
    
   
    };
 