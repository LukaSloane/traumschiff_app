import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Viewpoints } from 'src/app/model/viewpoint';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ViewpointsService {

  urlPath: string = environment.urlViewport;

  constructor(private http: HttpClient) { }

  public loadViewpoints(): Promise<Viewpoints[]> {
    return this.http.get<Viewpoints[]>(this.urlPath).toPromise();
  }

}
