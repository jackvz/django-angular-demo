import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  selectedEmployee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  add(
    person_last_name: string,
    person_first_name: string,
    person_birth_date: Date,
    employee_num: Number,
    employee_date: Date,
    terminated_date: Date
  ): void {
    this.employeeService.addEmployee(new Employee(null, person_last_name, person_first_name, person_birth_date, null, employee_num, employee_date, terminated_date))
      .subscribe(employee => {
        this.employees.push(employee);
      });
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(h => h !== employee);
    this.employeeService.deleteEmployee(employee).subscribe();
  }
}
