import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //URL get all employees
  private baseURL = "http://localhost:8080/employees";
  constructor(private httpClient : HttpClient) { }

  //Method get all employees
  getAllEmployees():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  //Registry employees
  registryEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  //Update employees
  updateEmployee(employeeId:number, employee:Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${employeeId}`,employee);
  }

  //Update employees
  deleteEmployee(employeeId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${employeeId}`);
  }

  //get employee by Id
  getEmployee(employeeId:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${employeeId}`);
  }
  
}
