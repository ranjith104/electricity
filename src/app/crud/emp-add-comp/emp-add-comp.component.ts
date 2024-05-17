import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { DataserviceService } from '../../../service/dataservice.service';
import { HeaderComponent } from '../../shared/layout/header/header.component';


@Component({
  selector: 'app-emp-add-comp',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HeaderComponent],
  templateUrl: './emp-add-comp.component.html',
  styleUrl: './emp-add-comp.component.css'
})
export class EmpAddCompComponent {
    empData:any;
   
    constructor(private _dbServ:DataserviceService,private router:Router){ }
 
    ngOnInit(){
      this.empData=new FormGroup({
        name:new FormControl(""),
        address:new FormControl(""),
        amount:new FormControl(""),
        duedate:new FormControl("")
      })
    }
 
    addData(){
      console.log(this.empData.value);
     
      this._dbServ.addemployee(this.empData.value).subscribe(()=>{
        window.alert("Employee Added Successfully");
        this.router.navigate(["/dashboard"]);
      })
    }
}