import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss']
})
export class AddStudentsComponent implements OnInit {

  sems = [1, 2, 3, 4, 5, 6, 7, 8];
  branches = ['Computer Engineering', 'Information & Technology', 'Mechanical Engineering', 'Civil Engineering', 
             'Chemical Engineering', 'Electronics & Communication Engineering', 'Electrical Engineering',
             'Automobile Engineering'];


  studentForm: FormGroup;


  constructor(private studentService: StudentService, private router:Router) { }

  ngOnInit() {
    this.studentForm = new FormGroup({
      eid : new FormControl('',[Validators.required, Validators.pattern("^[0-9]{12}$")]),
      firstName : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]{1,60}$")]),
      lastName : new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]{1,60}$")]),
      sem : new FormControl('',[Validators.required]),
      branch : new FormControl('',[Validators.required])
    });
  }

  onSubmit(){
      this.studentService.createItem(this.studentForm.value).subscribe(() => 
      this.router.navigate(['displaystudents']));
      //console.log(this.studentForm.value);
  }

  
}

