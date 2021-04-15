import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.interface';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public title: string = 'employee-manager-front-end';
  public employees: Employee[];

  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;

      },
      (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    );
  }

}
