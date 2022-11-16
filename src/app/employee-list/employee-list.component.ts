import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { AnyCnameRecord } from 'dns';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  constructor(public empservice: EmployeeService, private route: ActivatedRoute, private router: Router) {
  }
  displayedColumns: string[] = ['name', 'age', 'dateofbirth', 'address'];
  dataSource: any = new MatTableDataSource<Employee>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  emp: Employee[] = [];



  addEmployee() {
    this.router.navigate(['/Add']);
  }


  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.empservice.getEmployeeList().subscribe(
      res => {
        this.emp = res as Employee[];
        this.dataSource = new MatTableDataSource<Employee>(this.emp);      
      },
      err => { console.log(err) }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
