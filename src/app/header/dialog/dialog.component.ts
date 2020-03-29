import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLinkActive, Routes} from '@angular/router';


@Component({
  templateUrl: 'dialog.component.html',
})
export class DialogComponent implements OnInit, OnDestroy, AfterViewInit {

  selectedIndex: number;
  isViewInitialized = false;
  navLinks = [];


  onNoClick(): void {
    // this.dialogRef.close();
  }

  selectedIndexChange(val: number) {
    this.selectedIndex = val;
    console.log('this is selected index: ', val);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef
    // public dialogRef: MatDialogRef<DialogComponent>,
    // @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {

    this.navLinks = (
      this.route.routeConfig && this.route.routeConfig.children ?
        this.buildNavItems(this.route.routeConfig.children) :
        []
    );
    console.warn('----nav links founded: ', this.navLinks);
  }

  ngOnDestroy() {
    console.warn('---- Dialog was destroyed ----');
    this.router.navigate(['']);
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  buildNavItems(routes: Routes) {
    return (routes)
      .filter(route => route.data)
      .map(({ path = '', data }) => ({
        path: path,
        label: data.label,
        icon: data.icon
      }));
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    const routerLink = rla.linksWithHrefs.first;

    return this.router.isActive(routerLink.urlTree, false);
  }

}
