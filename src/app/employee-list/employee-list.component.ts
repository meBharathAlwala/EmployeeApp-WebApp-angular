import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import {} from '@angular/material'
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { AnyCnameRecord } from 'dns';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public empservice:EmployeeService,private route: ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {

    this.empservice.refreshList();
  }
  addEmployee(){
    this.router.navigate(['/Add']);
  }
}
