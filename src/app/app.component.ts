import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from './services/employee-service.service';
import { Employee } from './models/employee';
import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'employeeManager';

  constructor(private employeeService: EmployeeServiceService) {}
  ngOnInit(): void {
    this.getEmployees();
  }

  
  employees: Employee[];
  searchValue: string = '';

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  occupation: string;
  imageUrl: string;


  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addEmployee(employee: NgForm) {
    this.employeeService.addEmployee(employee.value).subscribe(
      (response: Employee) => {
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (response: void) => {
        this.getEmployees();
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
      
    );
      
  }


  getEmployeeInfo(id: number) {
    this.employeeService.getEmployee(id).subscribe(
      (response: Employee) => {
        this.id = id;
        this.firstName = response.firstName;
        this.lastName = response.lastName;
        this.email = response.email;
        this.phoneNumber = response.phoneNumber;
        this.occupation = response.occupation;
        this.imageUrl = response.imageUrl;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  updateEmployee(employee: NgForm) {
    console.log(employee.value);
    this.employeeService.updateEmployee(employee.value).subscribe(
      (response: Employee) => {
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
