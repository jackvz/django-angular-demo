import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Employee } from '../employee';
import { EmployeeService }  from '../employee.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() isAdd = false;
  @Input() employee;
  public frm;
  public isBusy = false;
  public hasFailed = false;
  public showInputErrors = false;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.setupForm();
  }

  ngOnChanges() {
    this.setupForm();
  }

  setupForm(): void {
    if (!this.employee) {
      this.employee = new Employee(null, null, null, null, null, null, null, null)
    }
    this.frm = new FormGroup({
      'last_name': new FormControl(this.employee.person.last_name, [Validators.required]),
      'first_name': new FormControl(this.employee.person.first_name, [Validators.required]),
      'birth_date': new FormControl(this.employee.person.birth_date, [Validators.required]),
      'employee_num': new FormControl(this.employee.employee_num, [Validators.required]),
      'employee_date': new FormControl(this.employee.employee_date, [Validators.required]),
      'terminated_date': new FormControl(this.employee.terminated_date, []),
    });
  }

  save(): void {
    if (this.frm.invalid) {
      this.showInputErrors = true;
      return;
    }

    this.isBusy = true;
    this.hasFailed = false;

    this.employee.person.last_name = this.frm.get('last_name').value;
    this.employee.person.first_name = this.frm.get('first_name').value;
    this.employee.person.birth_date = this.frm.get('birth_date').value;
    this.employee.employee_num = this.frm.get('employee_num').value;
    this.employee.employee_date = this.frm.get('employee_date').value;
    this.employee.terminated_date = this.frm.get('terminated_date').value;

    if (this.isAdd) {
      this.employeeService.addEmployee(this.employee)
       .subscribe(
          (response) => {
            window.location.reload();
          },
          (error) => {
            console.log(error);
          }
      );
    } else {
      this.employeeService.updateEmployee(this.employee)
       .subscribe(
          (response) => {
          },
          (error) => {
            console.log(error);
          }
      );
    }
  }
}
