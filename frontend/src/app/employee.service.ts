import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesUrl = 'http://localhost:8000/employees/';

  constructor(
    private api: ApiService
  ) { }

  getEmployees(): Observable<Employee[]> {
    return this.api.getAllEmployees();
  }

  getEmployee(id: number): Observable<Employee> {
    return this.api.getEmployeeById(id);
  }

  addEmployee (employee: Employee): Observable<Employee> {
    return this.api.createEmployee(employee);
  }

  updateEmployee (employee: Employee): Observable<any> {
    return this.api.updateEmployee(employee);
  }

  deleteEmployee (employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;

    return this.api.deleteEmployeeById(id);
  }
}
