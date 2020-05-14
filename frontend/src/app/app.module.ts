import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaViewComponent } from './pages/media-view/media-view.component';

import {HttpClientModule} from "@angular/common/http";
import { NewMediaComponent } from './pages/new-media/new-media.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomerViewComponent } from './pages/customer-view/customer-view.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { RentViewComponent } from './pages/rent-view/rent-view.component';
import { NewRentComponent } from './pages/new-rent/new-rent.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaViewComponent,
    NewMediaComponent,
    HomeComponent,
    CustomerViewComponent,
    NewCustomerComponent,
    RentViewComponent,
    NewRentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
