import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginModel } from './login-model';
import { HeaderHttpService } from '../../header-http.service';
import {MatDialogRef} from '@angular/material';
import {DialogComponent} from '../dialog.component';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private headerHttpService: HeaderHttpService, private dialogRef: MatDialogRef<DialogComponent> ) {}
  loginForm: FormGroup;
  loginModel: LoginModel;
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  login() {
    this.loginModel = new LoginModel(this.loginForm.value.username, this.loginForm.value.password);
    const obs = this.headerHttpService.authenticateUser(this.loginModel);
    obs.subscribe(
      (response) => {
        this.headerHttpService.setSession(response);
        this.headerHttpService.setLoggedInUserName(response.username);
        this.dialogRef.close();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
