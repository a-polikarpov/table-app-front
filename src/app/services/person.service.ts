import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../constants';
import {Observable} from 'rxjs';
import {IPerson} from '../model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<{ users: IPerson[] }> {
    return this.http.get<{users: IPerson[]}>(`${API_URL}/user`);
  }

  create(data: IPerson): Observable<{user: IPerson}> {
    return this.http.post<{user: IPerson}>(`${API_URL}/user`, data);
  }

  removeById(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/user/${id}`);
  }

  updateById(id: number, data: { firstName?: string, lastName?: string, email?: string }): Observable<{user: IPerson}> {
    return this.http.put<{user: IPerson}>(`${API_URL}/user/${id}`, data);
  }
}
