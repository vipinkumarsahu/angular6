import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import {Employee} from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  togglePriview = true;

  employee : Employee = {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    department: 'select',
    isActive: null,
    photoPath: null,
    password: null,
    confirmPassword: null
  }

  departements : Department[] = [
    {id: 1, name:'Help Desk'},
    {id: 2, name:'IT'},
    {id: 3, name:'HR'},
    {id: 4, name:'Admin'}
  ]
  isActive = true;
  constructor(private _employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }
  saveEmployee(newEmployee: Employee): void{
    this._employeeService.save(newEmployee);
    this.router.navigate(['list']);
  }

  toggle(){
    this.togglePriview = !this.togglePriview;
  }

}
