import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  constructor(private http: HttpClient) {
    this.getClubs();
  }

  getClubs() {
    return this.http.post<any>('http://backend.test/api/clubs', {});
  }

  getClubById(id: string) {
    return this.http.get<any>(`http://backend.test/api/clubs/${id}`);
  }

  getUsersByRollnos(rollnos: string[]) {
    return this.http.post<any>('http://backend.test/api/clubs/get-users', {
      rollnos,
    });
  }
}
