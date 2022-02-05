import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { CarouselComponent } from './header/carousel/carousel.component';
import { ProductComponent } from './products/product/product.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HightLightDirective } from './directives/hight-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    NavBarComponent,
    CarouselComponent,
    ProductComponent,
    FilterPipe,
    HightLightDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
