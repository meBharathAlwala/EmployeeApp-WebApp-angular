import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { EmployeeListComponent} from './employee-list/employee-list.component'
import { Routes ,RouterModule} from '@angular/router';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'Home', component: EmployeeListComponent },
  { path: 'Add', component: EmployeeAddEditComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EmployeeAddEditComponent]
