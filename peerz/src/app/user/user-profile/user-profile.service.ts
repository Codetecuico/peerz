import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IUserProfile } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private userProfileUrl = 'api/userProfile';

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<IUserProfile> {
    return this.http.get<IUserProfile>(this.userProfileUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  updateUserProfile(userProfile: IUserProfile): Observable<IUserProfile> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<IUserProfile>(this.userProfileUrl, userProfile, { headers })
      .pipe(
        tap(() => console.log('updateUserProfile: ' + userProfile.id)),
        map(() => userProfile),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}