import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  pageHeader: string = "My Profile";

  constructor(private titleService: Title,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.titleService.setTitle('Peerz | ' + this.pageHeader);
    
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  save(): void {}
}
