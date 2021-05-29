import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const HeaderOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  public login(data): Observable<any> {
    return this.http.post(this.apiUrl + '/login', data, {
      withCredentials: true,
    });
  }

  public signup(data): Observable<any> {
    return this.http.post(this.apiUrl + '/register', data, {
      withCredentials: true,
    });
  }

  public getUser(): Observable<any> {
    return this.http.get(this.apiUrl + '/user', { withCredentials: true });
  }

  public logout(): Observable<any> {
    return this.http.post(
      this.apiUrl + '/logout',
      {},
      { withCredentials: true }
    );
  }
}
