import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MediaViewComponent} from './pages/media-view/media-view.component';
import {NewMediaComponent} from "./pages/new-media/new-media.component";


const routes: Routes = [
  {path: '', redirectTo: 'media', pathMatch:'full'},

  {path: 'media', component: MediaViewComponent},
  {path: 'new-media', component: NewMediaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
