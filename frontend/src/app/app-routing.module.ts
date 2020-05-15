import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MediaViewComponent} from './pages/media-view/media-view.component';
import {NewMediaComponent} from "./pages/new-media/new-media.component";
import {HomeComponent} from "./pages/home/home.component";
import {CustomerViewComponent} from "./pages/customer-view/customer-view.component";
import {NewCustomerComponent} from "./pages/new-customer/new-customer.component";
import {RentViewComponent} from "./pages/rent-view/rent-view.component";
import {NewRentComponent} from "./pages/new-rent/new-rent.component";
import {EditMediaComponent} from "./pages/edit-media/edit-media.component";
import {EditCustomerComponent} from "./pages/edit-customer/edit-customer.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'media', component: MediaViewComponent},
  {path: 'media/:mediaId', component: MediaViewComponent},
  {path: 'new-media', component: NewMediaComponent},
  {path: 'edit-media/:mediaId', component: EditMediaComponent},

  {path: 'customer', component: CustomerViewComponent},
  {path: 'customer/:customerId', component: CustomerViewComponent},
  {path: 'new-customer', component: NewCustomerComponent},
  {path: 'edit-customer/:customerId', component: EditCustomerComponent},

  {path: 'rent', component: RentViewComponent},
  {path: 'rent/:rentId', component: RentViewComponent},
  {path: 'new-rent', component: NewRentComponent},
  {path: 'new-rent/:customerId', component: NewRentComponent},
  {path: 'new-rent/:customerId/:mediaId', component: NewRentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
