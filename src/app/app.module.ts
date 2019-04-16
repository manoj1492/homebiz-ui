import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { LoginmodalComponent } from './header/loginmodal/loginmodal.component';

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
    SliderComponent,
    LoginmodalComponent
  ],
  entryComponents:[
    LoginmodalComponent
  ],
  imports: [
    BrowserModule,
    NgbModalModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
