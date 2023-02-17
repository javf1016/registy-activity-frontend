import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from './activity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  //URL get all employees
  private baseURL = "http://localhost:8080/activities";
  constructor(private httpClient : HttpClient) { }

  //Method get all Activity
  getAllActivities():Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(`${this.baseURL}`);
  }

  //Registry Activity
  registryActivity(activity:Activity):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,activity);
  }

  //Update Activity
  updateActivity(activityId:number, activity:Activity):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${activityId}`,activity);
  }

  //Delete Activity
  deleteActivity(activityId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${activityId}`);
  }

  //get employee by Id
  getActivity(activityId:number):Observable<Activity>{
    return this.httpClient.get<Activity>(`${this.baseURL}/${activityId}`);
  }
}