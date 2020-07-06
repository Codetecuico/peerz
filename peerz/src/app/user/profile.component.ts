import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { UserProfile } from './user-profile';
import { UserProfileService} from './user-profile.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  pageHeader: string = "My Profile";
  profileForm: FormGroup;
  userProfile: UserProfile;
  errorMessage: string;

  constructor(private titleService: Title,
              private fb: FormBuilder,
              private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Peerz | ' + this.pageHeader);
    
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
    });

    this.userProfileService.getUserProfile().subscribe({
      next: userProfile => {
        this.userProfile = userProfile;
        
        this.profileForm.patchValue({
          firstName: this.userProfile.firstName,
          lastName: this.userProfile.lastName
        });
      },
      error: err => this.errorMessage = err
    });
  }

  save(): void {}
}
