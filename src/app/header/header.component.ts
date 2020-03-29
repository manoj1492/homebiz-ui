import {FormGroup} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';
import {HeaderHttpService} from './header-http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerSearchForm: FormGroup;
  constructor(public dialog: MatDialog, private router: Router, private headerHttpService: HeaderHttpService) {
      this.headerSearchForm = new FormGroup({});
  }

  ngOnInit() {
  }

  open() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      position: {
        top: '10vh'
      },
    });
    this.router.navigate(['dialog/login']);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  isLoggedIn() {
    return this.headerHttpService.isLoggedIn();
  }

  getLoggedInUserName() {
    return this.headerHttpService.getLoggedInUserName();
  }

  logout() {
    this.headerHttpService.logout();
  }

}
