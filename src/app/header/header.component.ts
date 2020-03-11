import { FormGroup, FormControl } from '@angular/forms';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive, Routes } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { DialogModule } from './dialog/dialog.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerSearchForm:FormGroup;
  constructor(public dialog: MatDialog, private router: Router) {
      this.headerSearchForm = new FormGroup({});
  }

  ngOnInit() {
  }

  open(){
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      position: {
        top: '10vh'
      },
    });
  this.router.navigate(['dialog/login'])
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
