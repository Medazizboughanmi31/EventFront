import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {EventModule} from "../../models/event.module";
import {userAuthService} from "./user-auth";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8082/event';

  constructor(private http: HttpClient , private userAuthService: userAuthService) { }
  private createHeaders(): HttpHeaders {
    const jwtToken = this.userAuthService.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`
    });
    return headers;
  }

  getEvents(): Observable<EventModule[]> {
    const headers = this.createHeaders();
    return this.http.get<EventModule[]>(`${this.baseUrl}/retrieve-all-events`,{headers});
  }

  getEvent(id: number): Observable<EventModule> {
    const headers = this.createHeaders();
    return this.http.get<EventModule>(`${this.baseUrl}/retrieve-event/${id}`,{headers});
  }

  addEvent(event: EventModule): Observable<EventModule> {
    const headers = this.createHeaders();
    return this.http.post<EventModule>(`${this.baseUrl}/add-event`, event,{headers});
  }

  removeEvent(id: number): Observable<void> {
    const headers = this.createHeaders();
    return this.http.delete<void>(`${this.baseUrl}/remove-event/${id}`,{headers});
  }

  modifyEvent(event: EventModule): Observable<EventModule> {
    const headers = this.createHeaders();
    return this.http.put<EventModule>(`${this.baseUrl}/modify-event`, event,{headers});
  }
}
