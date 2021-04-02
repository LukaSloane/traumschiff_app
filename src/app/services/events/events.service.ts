import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from 'src/app/model/events';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

 eventURL: string = environment.urlEvents;

  constructor(private http: HttpClient) { }

  public loadEvents(): Promise<Events[]> {
    return this.http.get<Events[]>(this.eventURL).toPromise();
  }
}
