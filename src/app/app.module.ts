import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatDialogModule } from '@angular/material';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { InnerContainerComponent } from './inner-container/inner-container.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BoxesComponent } from './boxes/boxes.component';
import { FeaturesComponent } from './features/features.component';
import { SliderComponent } from './home/slider/slider.component';
import { DialogComponent } from './header/dialog/dialog.component';
import { DialogModule } from './header/dialog/dialog.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    InnerContainerComponent,
    HomeComponent,
    ProductsComponent,
    BoxesComponent,
    FeaturesComponent,
    SliderComponent
  ],
  entryComponents:[
    DialogComponent
  ],
  imports: [
    BrowserModule,
    NgbModalModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    DialogModule,
    RouterModule.forRoot([
      {
        path: '', component: HeaderComponent
      },
      { path: 'dialog', component: DialogComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
