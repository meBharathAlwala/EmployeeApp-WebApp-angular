import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeAddEditComponent } from './employee-add-edit/employee-add-edit.component';
import { Routes ,RouterModule} from '@angular/router';

const routes: Routes = [
  { path: 'Add', component: EmployeeAddEditComponent }
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
