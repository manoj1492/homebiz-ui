import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
