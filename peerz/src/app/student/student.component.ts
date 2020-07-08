import { Component, OnInit } from '@angular/core';
import { TitleService } from '../shared/title.service';
import { IStudent } from '../shared/interfaces';
import { StudentService } from './student.service';

@Component({
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  pageHeader: string = "Student Records";
  errorMessage: string;
  students: IStudent[] = [];
  filteredStudents: IStudent[] = [];

  constructor(private titleService: TitleService,
              private studentService: StudentService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.pageHeader);

    this.studentService.getStudents().subscribe({
      next: students => {
        this.students = students;
        this.filteredStudents = students;
      },
      error: err => {
        this.errorMessage = err;
      }
    });
  }

}
