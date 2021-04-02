import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todos } from 'src/app/model/todos';



@Injectable({
  providedIn: 'root'
})
export class TodosService {

  rootPath: string = environment.rootURL;

  constructor(private http: HttpClient) { }


  public loadTodos(): Promise<Todos[]> {
    return this.http.get<Todos[]>(this.rootPath).toPromise();
  }

  // public loadTodos(): Promise<Array<Todos>> {
  //   return new Promise((resolve) => {
  //     this.http.get<Array<Todos>>(this.rootPath).subscribe(
  //       data => {
  //         resolve(data);
  //       },
  //       () => {
  //         resolve([]);
  //       }
  //     );
  //   });
  // }


}
