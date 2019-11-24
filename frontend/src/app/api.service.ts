import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http,
  ) {
  }

  public getAllEmployees(): Observable<Employee[]> {
    const options = this.getRequestOptions();
    return this.http
      .get(API_URL + '/employees/', options)
      .map(response => {
        const employees = response.json();
        return employees.map((employee) => Employee.fromData(employee));
      })
      .catch(this.handleError);
  }

  public createEmployee(employee: Employee): Observable<Employee> {
    const options = this.getRequestOptions();
    return this.http
      .post(API_URL + '/employees/', employee, options)
      .map(response => {
        return Employee.fromData(response.json());
      })
      .catch(this.handleError);
  }

  public getEmployeeById(employeeId: number): Observable<Employee> {
    const options = this.getRequestOptions();
    return this.http
      .get(API_URL + '/employees/' + employeeId + '/', options)
      .map(response => {
        return Employee.fromData(response.json());
      })
      .catch(this.handleError);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    const options = this.getRequestOptions();
    return this.http
      .put(API_URL + '/employees/' + employee.id + '/', employee, options)
      .map(response => {
        return Employee.fromData(response.json());
      })
      .catch(this.handleError);
  }

  public deleteEmployeeById(employeeId: number): Observable<null> {
    const options = this.getRequestOptions();
    return this.http
      .delete(API_URL + '/employees/' + employeeId + '/', options)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  private getRequestOptions() {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    return new RequestOptions({ headers });
  }
}
