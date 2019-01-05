import { Injectable } from '@angular/core';
import {Employee} from '../models/employee.model'

@Injectable()
export class EmployeeService{
    private listEmployee : Employee[]  = [
        {
          id: 1,
          name: 'mark',
          gender: 'male',
          email: 'vipin182sahu@gmail.com',
          phoneNumber: 7376330343,
          contactPreference: 'test',
          department: '2',
          isActive: true,
          photoPath: 'assets/images/mark1.png',
          password: 'null',
          confirmPassword: 'null'
        },
        {
          id: 2,
          name: 'mark',
          gender: 'male',
          email: 'vipin182sahu@gmail.com',
          phoneNumber: 7376330343,
          contactPreference: 'test',
          
          department: '2',
          isActive: true,
          photoPath: 'assets/images/mark2.png',
          password: 'null',
          confirmPassword: 'null'
        },
        {
          id: 3,
          name: 'mark',
          gender: 'male',
          email: 'vipin182sahu@gmail.com',
          phoneNumber: 7376330343,
          contactPreference: 'test',
          department: '3',
          isActive: true,
          photoPath: 'assets/images/mark3.png',
          password: 'null',
          confirmPassword: 'null'
        }
      ]
      
      getEmployee(): Employee[] {
          return this.listEmployee;
      }
      save(employee : Employee){
          this.listEmployee.push(employee);
      }
} 