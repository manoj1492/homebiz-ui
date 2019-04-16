import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerSearchForm:FormGroup;
  constructor(private modalService: NgbModal) {
      this.headerSearchForm = new FormGroup({});
  }

  ngOnInit() {
  }

  open(){
    this.modalService.open(LoginmodalComponent);
  }

}
