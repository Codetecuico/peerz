import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IStudent } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = 'api/students';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.studentsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
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