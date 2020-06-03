import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  baseUrl = 'http://217.76.158.200:8090/api/statistics'
  constructor(private http: HttpClient) { }
    //get students per itinerary
    public get_itineraryStudents () {
      return this.http.get(this.baseUrl+'/per-itinerary/');
    }
    public get_genderStudents () {
      return this.http.get(this.baseUrl+'/per-gender/');
    }
    public get_absenceStudents () {
      return this.http.get(this.baseUrl+'/per-absence/');
    }
}
