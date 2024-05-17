// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { QuickPayComponent } from '../quick-pay/quick-pay.component';
// import { AppComponent } from '../app.component';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { LoginComponent } from '../login/login.component';




// @NgModule({
//   declarations: [AppComponent,QuickPayComponent,LoginComponent],
//   imports: [
//     CommonModule,FormsModule,BrowserModule
//   ]
// })
// export class AppModule { }
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { AppComponent } from '../app.component';


 
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from '../app-routing.module';



// @NgModule({
//   declarations: [AppComponent],
//   imports: [
//     CommonModule,
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule
    
    
    
//   ]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Add HttpClientModule to imports
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
