import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'https://httpbin.org/#/';

  constructor(private http: HttpClient) { }

  // Implement CRUD functionality
  getAllStudents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Implement other CRUD methods (create, update, delete)

}
