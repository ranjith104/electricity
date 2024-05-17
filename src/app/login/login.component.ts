import { Component,OnInit } from '@angular/core';
import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
 
 
import { CommonModule } from '@angular/common';
 
 
import { Router } from '@angular/router';
import { GlobalServiceService } from '../../service/globalservice.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userData: any;
  userDB: any;

  constructor(private _globalSer: GlobalServiceService, private _router: Router) { }

  ngOnInit() {
    this.userData = new FormGroup({
      userId: new FormControl("", [Validators.required]),
      userpass: new FormControl("", [Validators.required])
    });
  }

  checkData() {
    //console.log(this.userData.value);
    this._globalSer.getRequest("users").subscribe(
      (res) => {
        this.userDB = res;
        const data = this.userDB.filter((val: any) => {
          return val.uid === this.userData.value.userId && val.upass === this.userData.value.userpass;
        });
        if (data.length > 0) {
          this._globalSer.signIn(this.userData.value.userId);
          this._router.navigate(['maindash']);
        } else {
          window.alert("Invalid Credential");
        }
      },
      (error) => {
        console.error("Error fetching user data:", error);
        // Handle error here, e.g., show an error message to the user
      }
    );
  }
}

