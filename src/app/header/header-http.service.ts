import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './dialog/login/login-model';

@Injectable({
  providedIn: 'root'
})
export class HeaderHttpService {

  constructor(private http: HttpClient) { }

  isAuthenticated(loginModel: LoginModel): boolean{
    var obs = this.http.post("http://localhost:8080/auth/isAuthenticated", loginModel);
    obs.subscribe(
      (response) => {
        if(response == true)
          return true;
      },
      (error) => {
        console.log(error);
      }
    )
    return false;
  }
}
