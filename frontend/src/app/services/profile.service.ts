import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  profileInfo() {
    const token = localStorage.getItem('authToken');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>('http://backend.test/api/profile', {
      headers,
    });
  }

  updateInfo(input_name: string, input_rollno: string, input_email: string) {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<any>(
      'http://backend.test/api/update-profile',
      { name: input_name, rollno: input_rollno, email: input_email },
      {
        headers,
      }
    );
  }
}
