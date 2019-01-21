import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './students';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _url = 'http://localhost:3000/students';
  constructor(private http: HttpClient) { }

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this._url);
  }

  createItem(item: IStudent): Observable<void>{
    return this.http.post<void>(this._url,item);
  }

  deleteItem(id): Observable<void>{
    return this.http.delete<void>(`${this._url}/${id}`);
  }
}
