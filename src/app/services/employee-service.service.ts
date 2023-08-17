import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  

  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8090/api/v1/employee/find/all');
  }

  public getEmployee(id: number): Observable<Employee>{
    return this.http.get<Employee>(`http://localhost:8090/api/v1/employee/find/${id}`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:8090/api/v1/employee/add', employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>('http://localhost:8090/api/v1/employee/update', employee);
  }

  public deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8090/api/v1/employee/delete/${id}`);
  }

  
  

}
