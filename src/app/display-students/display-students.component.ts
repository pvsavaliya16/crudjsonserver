import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.scss']
})
export class DisplayStudentsComponent implements OnInit {

  students = [];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => this.students = data);
  }

  delStudent(student) {
    this.studentService.deleteItem(student.id).subscribe(data => console.log('success'));
  }
}
