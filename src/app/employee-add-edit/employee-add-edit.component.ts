import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-employee-add-edit',
  providers:[EmployeeService],
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css']
})
export class EmployeeAddEditComponent implements OnInit {

  //public entityNoteform: FormGroup;
 
  constructor(public empservice:EmployeeService) {
   
   }
  
  ngOnInit(): void {
   // this.empservice.refreshList();
  }
  entityNoteform =new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    age: new FormControl(0,[
      Validators.required
    ]),
    dateofbirth:new FormControl(new Date()),
    address:new FormControl('')
  })
  
  

  Submit(){
   //console.warn(this.entityNoteform.value["name"])
   this.empservice.saveEmployee(this.entityNoteform.value);
   // this.empservice.refreshList();
  }

  
   
}
