import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs/internal/Observable';
import { Console } from 'console';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
 
  emp: Employee[] = [];
  empPost: Employee[] = [];
  readonly baseURL ='https://localhost:7221/api/employee/employeelist'
  //formData:Employee = new Employee();
  refreshList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then( 
      res => this.emp = res as Employee[]    
      );      
      
 }  

 saveEmployee(empPost:any){
  debugger;
  this.http
  .post('https://localhost:7221/api/employee/PostEmployee', empPost)
  .subscribe({
    next: (response) => console.log(response),
    error: (error) => console.log(error),
  });

 }
}
