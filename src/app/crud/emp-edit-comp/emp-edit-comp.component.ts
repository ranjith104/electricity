import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../../../service/dataservice.service';
import { HeaderComponent } from '../../shared/layout/header/header.component';


@Component({
  selector: 'app-emp-edit-comp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './emp-edit-comp.component.html',
  styleUrl: './emp-edit-comp.component.css'
})
export class EmpEditCompComponent {
  id:any;
  empData:any;
  constructor(private _actRoute:ActivatedRoute,private _dbServ:DataserviceService,private router:Router){}
  ngOnInit(){
 
    this._actRoute.paramMap.subscribe((para)=>{
     
      this.id =para.get("id");
      this._dbServ.getSingleDataRequest(this.id).subscribe((res)=>{
        
       this.empData={...res};
      })
     
    })
  }
 
  addData(data:any){
    this._dbServ.updateEmployee(this.id,data).subscribe(()=>{
      window.alert("data updated successfully");
      this.router.navigate(["/dashboard"]);
    })
   
  }
}