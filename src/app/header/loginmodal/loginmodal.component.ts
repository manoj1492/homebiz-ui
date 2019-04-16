import { Component, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginModel } from './login-model';
import { HeaderHttpService } from '../header-http.service';


@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css']
})
export class LoginmodalComponent implements OnInit{

  constructor(public activeModal: NgbActiveModal, private headerHttpService: HeaderHttpService) {}
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

    //console.warn(this.loginForm.value);// WARNING:
  }

}
