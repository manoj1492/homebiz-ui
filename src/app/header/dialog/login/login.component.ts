import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginModel } from './login-model';
import { HeaderHttpService } from '../../header-http.service';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private headerHttpService: HeaderHttpService) {}
  loginForm: FormGroup;
  loginModel: LoginModel;
  ngOnInit(){
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  login(){
    this.loginModel = new LoginModel(this.loginForm.value.username, this.loginForm.value.password);
    this.headerHttpService.isAuthenticated(this.loginModel);
  }

}
