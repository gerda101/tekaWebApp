import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MediaViewComponent} from './pages/media-view/media-view.component';


const routes: Routes = [
  {path: '', component: MediaViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
