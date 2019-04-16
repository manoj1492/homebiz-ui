import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  menuSearchForm: FormGroup;
  constructor() {
    this.menuSearchForm = new FormGroup({});
  }

  ngOnInit() {
  }

}
