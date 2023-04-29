import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './Models/User';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { loginModel } from "./Models/LoginModel";
import Swal from 'sweetalert2';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {
  }
  login(loginData: FormData): Observable<any> {
    console.log(loginData)
    return this.http.post<any>(AUTH_API + 'authenticate', loginData, httpOptions).pipe(
      catchError((error:any) => {
        if (error.status === 403) {
       
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Wrong Creditentials',
            })
        
        }
        return throwError(error);
      })
    );
      
  }
  signUp(SignUpData: FormData): Observable<any> {
    console.log(SignUpData)
    return this.http.post<any>(AUTH_API + 'register', SignUpData, httpOptions).pipe(
      catchError((error:any) => {
        if (error.status === 404) {
       
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Email Does Not Exist',
            })
        
        }
        return throwError(error);
      })
    );
      
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout',{});
  }
}

