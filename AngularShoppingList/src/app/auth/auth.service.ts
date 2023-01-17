import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  baseSignUpUrl =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDBI8ZovXf3edRpWOd9-bLidGXijEYb8sQ';

  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.baseSignUpUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: string) {
    let signInUrl =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDBI8ZovXf3edRpWOd9-bLidGXijEYb8sQ';

    return this.http
      .post<AuthResponseData>(signInUrl, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error ocurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist!';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is invalid!';
        break;
    }
    return throwError(errorMessage);
  }
}
