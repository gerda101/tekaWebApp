import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MediaViewComponent} from './pages/media-view/media-view.component';
import {NewMediaComponent} from "./pages/new-media/new-media.component";
import {HomeComponent} from "./pages/home/home.component";
import {CustomerViewComponent} from "./pages/customer-view/customer-view.component";
import {NewCustomerComponent} from "./pages/new-customer/new-customer.component";
import {RentViewComponent} from "./pages/rent-view/rent-view.component";
import {NewRentComponent} from "./pages/new-rent/new-rent.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'media', component: MediaViewComponent},
  {path: 'new-media', component: NewMediaComponent},
  {path: 'customer', component: CustomerViewComponent},
  {path: 'new-customer', component: NewCustomerComponent},
  {path: 'rent', component: RentViewComponent},
  {path: 'new-rent', component: NewRentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
