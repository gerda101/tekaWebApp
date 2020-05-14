import { Component, OnInit } from '@angular/core';
import {MediaService} from "../../media.service";

@Component({
  selector: 'app-new-media',
  templateUrl: './new-media.component.html',
  styleUrls: ['./new-media.component.scss']
})
export class NewMediaComponent implements OnInit {

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
  }

  createMedia(title: string, mediaType: string, duration: number){
    if (mediaType === "DVD" || mediaType ==="VHS") {
      this.mediaService.createMedia(title, mediaType, duration, "avaliable").subscribe((response: any) =>{
        console.log(response);
        window.alert("New media added!");
        window.location.reload();
      });
    } else {
      window.alert("Invalid media type!");
    }

  }
}
