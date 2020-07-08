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

        this.filteredStudents.sort((a, b) => a.lastName.localeCompare(b.lastName))
      },
      error: err => {
        this.errorMessage = err;
      }
    });
  }

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredStudents = this.listFilter ? this.performFilter(this.listFilter) : this.students;
  }

  performFilter(filterBy: string): IStudent[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.students.filter((student: IStudent) =>
        student.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1
        || student.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1
        )
  }

}