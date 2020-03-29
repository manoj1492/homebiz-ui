import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginModel} from './dialog/login/login-model';
import * as moment from 'moment';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Moment} from 'moment';

@Injectable({
  providedIn: 'root'
})
export class HeaderHttpService {

  private headers: HttpHeaders;
  constructor(private http: HttpClient, private router: Router) {
  }

  public authenticateUser(loginModel: LoginModel): Observable<any> {
    this.headers = new HttpHeaders({'authenticationType': 'Normal'});
    return this.http.post('http://localhost:8082/auth/authenticate', loginModel, {
      headers: this.headers
    });
  }

  public getAuthToken() {
    return localStorage.getItem('authToken');
  }

  public setSession(authResult) {
    const expiresAt = moment(authResult.expiresIn);
    console.log(expiresAt);
    localStorage.setItem('authToken', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  public logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('loggedInUserName');
  }

  public isLoggedIn(): boolean{
      const isLoggedIn = moment().isBefore(this.getExpiration());
      return isLoggedIn;
  }

  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  public getExpiration(): Moment {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  public getLoggedInUserName(): String {
    return localStorage.getItem('loggedInUserName');
  }

  public setLoggedInUserName(username): void {
    localStorage.setItem('loggedInUserName', username);
  }
}
