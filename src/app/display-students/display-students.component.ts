import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { IStudent } from '../students';

@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.scss']
})
export class DisplayStudentsComponent implements OnInit {

  students = [];
  sems = [1, 2, 3, 4, 5, 6, 7, 8];
  branches = ['Computer Engineering', 'Information & Technology', 'Mechanical Engineering', 'Civil Engineering', 
             'Chemical Engineering', 'Electronics & Communication Engineering', 'Electrical Engineering',
             'Automobile Engineering'];

  updateForm: FormGroup;
  editStudent: boolean = false;
  thisStudent;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => this.students = data);
    this.updateForm = new FormGroup({
      eid: new FormControl('',[Validators.pattern("^[0-9]{12}$")]),
      firstName : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]{1,60}$")]),
      lastName : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]{1,60}$")]),
      sem : new FormControl('',[Validators.required]),
      branch : new FormControl('',[Validators.required])
    });
  }

  delStudent(student) {
    this.studentService.deleteItem(student.id).subscribe(data => console.log('success'));
  }

  updateStudent(student): void {
    this.editStudent = true;
    this.thisStudent = student;
  }

  cancelForm() {
    this.editStudent=false;
  }

  updStudent(updateForm) {
    this.studentService.updateItem(this.thisStudent.id, updateForm.value).subscribe(data => console.log('success'));
  }

}
