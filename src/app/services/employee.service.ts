import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs/internal/Observable';
import { Console } from 'console';
import { EmployeeListComponent } from '../employee-list/employee-list.component';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  emp: Employee[] = [];
  empPost: Employee[] = [];
  readonly baseURL = 'https://localhost:7221/api/employee/employeelist'
  //formData:Employee = new Employee();
  refreshList() {
    return this.http
      .get(this.baseURL)
      .subscribe({
        next: (response) => this.emp = response as Employee[],
        error: (error) => console.log("testlog" + error),
      });

  }
  getEmployeeList(){
  return this.http.get(this.baseURL);
  }
  saveEmployee(empPost: any) {
    this.http
      .post('https://localhost:7221/api/employee/PostEmployee', empPost)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });

  }
}
