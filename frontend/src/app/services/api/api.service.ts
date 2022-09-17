import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URL: string;

  constructor(private http: HttpClient) {
    this.URL = environment.API_URL;
  }

  get<T>(uri: string): Observable<T> {
    return this.http.get<T>(`${this.URL}${uri}`);
  }

  post<T>(uri: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.URL}${uri}`, body);
  }

  update<T>(uri: string, body: any): Observable<T> {
    return this.http.patch<T>(`${this.URL}${uri}`, body);
  }

  delete<T>(uri: string): Observable<T> {
    return this.http.delete<T>(`${this.URL}${uri}`);
  }
}
