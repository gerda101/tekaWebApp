import { Component, OnInit } from '@angular/core';
import {MediaService} from "../../media.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-media',
  templateUrl: './new-media.component.html',
  styleUrls: ['./new-media.component.scss']
})
export class NewMediaComponent implements OnInit {

  constructor(private mediaService: MediaService, private router: Router) { }

  ngOnInit(): void {
  }

  createMedia(title: string, mediaType: string, duration: number){
    if (mediaType === "DVD" || mediaType ==="VHS") {
      this.mediaService.createMedia(title, mediaType, duration, "AVALIABLE").subscribe((response: any) =>{
        console.log(response);
        window.alert("New media added!");
        this.router.navigate(['/media']);
      });
    } else {
      window.alert("Invalid media type!");
    }

  }
}
