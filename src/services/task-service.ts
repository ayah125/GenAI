import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'http://localhost:5203/api/Assignment';

  constructor(private http: HttpClient) {}

  smartAssign(task: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, task);
  }
}
