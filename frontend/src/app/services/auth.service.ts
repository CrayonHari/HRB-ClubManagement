import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.hasToken()
  );
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private isAdminSubject = new BehaviorSubject<boolean>(this.checkAdminRole());
  public isAdmin$ = this.isAdminSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.loadToken();
  }

  loadToken() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isAuthenticatedSubject.next(true);
    } else {
      this.isAuthenticatedSubject.next(false);
    }
  }

  makeSignUp(
    input_name: string,
    input_rollno: string,
    input_email: string,
    input_password: string,
    input_password_confirmation: string
  ) {
    this.http
      .post<any>('http://backend.test/api/register', {
        name: input_name,
        rollno: input_rollno,
        email: input_email,
        password: input_password,
        password_confirmation: input_password_confirmation,
      })
      .subscribe((config) => {
        if (config) {
          localStorage.setItem('authToken', config.token);
          localStorage.setItem('userRole', config.role);

          this.isAuthenticatedSubject.next(true);
          this.isAdminSubject.next(this.checkAdminRole()); // Update admin status

          console.log(config);
          this.router.navigateByUrl(''); //TODO:: success signup page
          console.log('you have successfully signed up.');
        } else {
          console.log('your credentials are wrong');
        }
      });
  }

  makeLogin(input_email: string, input_password: string) {
    this.http
      .post<any>('http://backend.test/api/login', {
        email: input_email,
        password: input_password,
      })
      .subscribe((config) => {
        if (config && config.token) {
          localStorage.setItem('authToken', config.token);
          localStorage.setItem('userRole', config.role);
          this.isAuthenticatedSubject.next(true);
          this.isAdminSubject.next(this.checkAdminRole());

          console.log(config);
          this.router.navigateByUrl('/');
        } else {
          console.error('Login failed: No token received');
        }
      });
  }

  makeLogout() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    });
    this.http
      .post('http://backend.test/api/logout', {}, { headers })
      .subscribe((config) => {
        console.log(config);
        this.isAuthenticatedSubject.next(false);
        this.isAdminSubject.next(false);
      });
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  isAdmin(): boolean {
    return this.isAdminSubject.value;
  }

  private checkAdminRole(): boolean {
    const role = localStorage.getItem('userRole');
    return role === 'admin';
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
