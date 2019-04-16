import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  newsLetterForm: FormGroup;
  constructor() {
    this.newsLetterForm = new FormGroup({});
  }

  ngOnInit() {
  }

}
