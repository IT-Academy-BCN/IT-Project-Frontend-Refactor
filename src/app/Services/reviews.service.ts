import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ExerciseResponseList } from '../Models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  
  constructor(private http: HttpClient) { }

  public getAllExercises() {
    const apiURL = "http://217.76.158.200:8090/api/exercises";
    return this.http.get<ExerciseResponseList[]>(apiURL)
      .pipe(catchError(this.handleError))
  };

  public getExercisesPerItinerary(itinerary: number) {
    //Pendiente implementar
  };

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
