import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentsComponent } from './add-students/add-students.component';
import { DisplayStudentsComponent } from './display-students/display-students.component';

const routes: Routes = [
  { path:'addstudents', component:AddStudentsComponent },
  { path:'displaystudents', component:DisplayStudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
