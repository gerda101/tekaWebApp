import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MediaViewComponent} from './pages/media-view/media-view.component';
import {NewMediaComponent} from "./pages/new-media/new-media.component";
import {HomeComponent} from "./pages/home/home.component";
import {CustomerViewComponent} from "./pages/customer-view/customer-view.component";
import {NewCustomerComponent} from "./pages/new-customer/new-customer.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'media', component: MediaViewComponent},
  {path: 'new-media', component: NewMediaComponent},
  {path: 'customer', component: CustomerViewComponent},
  {path: 'new-customer', component: NewCustomerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
