import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

const routes: Routes = [
  {path:'', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component:ListEmployeesComponent},
  {path: 'create', component: CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponent = [ListEmployeesComponent, CreateEmployeeComponent]
