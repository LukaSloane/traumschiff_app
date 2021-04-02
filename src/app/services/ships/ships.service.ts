import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ships } from 'src/app/model/ships';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  shipURL: string = environment.urlShips;

  constructor(private http: HttpClient) { }

  public loadShips(): Promise<Ships[]> {
    return this.http.get<Ships[]>(this.shipURL).toPromise();
  }
}
