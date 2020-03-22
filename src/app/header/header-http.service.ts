import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './dialog/login/login-model';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderHttpService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated(loginModel: LoginModel): boolean{
    this.headers = new HttpHeaders({'authenticationType': 'Normal'});
    var obs = this.http.post("http://localhost:8082/auth/authenticate", loginModel,{
        headers: this.headers
      })
    obs.subscribe(
      (response) => {
        this.setSession(response);
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
    )
    return false;
  }

  getAuthToken(){
    return localStorage.getItem("authToken");
  }

  private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('authToken', authResult.token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }

    logout() {
        localStorage.removeItem("authToken");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
}
