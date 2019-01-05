import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule, AppRoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {SRVDirective} from './validater/SRV.directive';
import {matchPassword} from './validater/password.directive';
import {EmployeeService} from './employees/employee.service';
import { DisplayEmployeeComponent } from './employee/display-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent,
    SRVDirective,
    matchPassword,
    DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
