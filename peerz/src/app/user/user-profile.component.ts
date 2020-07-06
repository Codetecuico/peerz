import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, Validators, FormGroup, FormControlName } from '@angular/forms';

import { GenericValidator } from '../shared/generic-validator';
import { UserProfile } from './user-profile';
import { UserProfileService} from './user-profile.service';
import { Observable, merge, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  
  pageHeader: string = "My Profile";
  isLoaded: boolean = true;
  profileForm: FormGroup;
  userProfile: UserProfile;
  errorMessage: string;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(private titleService: Title,
              private fb: FormBuilder,
              private userProfileService: UserProfileService) { 

      this.validationMessages = {
        firstName: {
          required: 'First name is required.',
          maxlength: 'First name cannot exceed 20 characters.'
        },
        lastName: {
          required: 'Last name is required.',
          maxlength: 'Last name cannot exceed 20 characters.'
        }
      };
      
      this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.titleService.setTitle('Peerz | ' + this.pageHeader);
    this.isLoaded = false;
    
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
    });

    this.userProfileService.getUserProfile().subscribe({
      next: userProfile => {
        this.userProfile = userProfile;
        
        this.profileForm.patchValue({
          firstName: this.userProfile.firstName,
          lastName: this.userProfile.lastName
        });
        this.isLoaded = true;
      },
      error: err => {
        this.errorMessage = err;        
        this.isLoaded = true;
      }
    });
  }
  
  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(this.profileForm.valueChanges, ...controlBlurs).pipe(
      //debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.profileForm);
    });
  }

  save(): void {}
}
