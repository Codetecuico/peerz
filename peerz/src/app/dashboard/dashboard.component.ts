import { Component, OnInit } from '@angular/core';
import { TitleService } from '../shared/title.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pageHeader: string = "Dashboard";

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.pageHeader);
  }

}
