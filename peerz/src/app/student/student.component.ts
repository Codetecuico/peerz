import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  pageHeader: string = "Student Records";

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Peerz | ' + this.pageHeader);
  }

}
