import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pageHeader: string = "Dashboard";

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Peerz | ' + this.pageHeader);
  }

}
