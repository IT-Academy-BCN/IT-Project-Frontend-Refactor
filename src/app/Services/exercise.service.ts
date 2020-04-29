import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { StudentExercise, StatusUpdateData, Statuses, StatusId } from '../Models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http: HttpClient) { }

  public getStudentExercises(studentId: string) {
    const apiEndPoint = 'http://217.76.158.200:8090/api/exercises/student-id';
    const url = `${apiEndPoint}/${studentId}`;
    return this.http
      .get<StudentExercise[]>(url)
      .pipe(
        map(this.parseDate),
        catchError(this.handleError)
      );
  }

  public updateExerciseStatus(updateData: StatusUpdateData) {
    // call to API must be implemented
  }

  private parseDate(exercises: StudentExercise[]) {
    exercises.forEach(exercise => {
      const date = exercise.status.date.split(' ')[0];
      const day = date[0] + date[1];
      const month = date[3] + date[4];
      const year = date.slice(6);
      exercise.status.date = `${month}/${day}/${year}`;
    });
    return exercises;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An client-side or network error occurred:', error.error.message);
    } else {
      console.error(
        `Server returned unsuccessful response code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Se ha producido un error. Intente nuevamente más tarde.'); // to user
  }
}

