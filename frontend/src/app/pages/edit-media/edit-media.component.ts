import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MediaService} from "../../media.service";

@Component({
  selector: 'app-edit-media',
  templateUrl: './edit-media.component.html',
  styleUrls: ['./edit-media.component.scss']
})
export class EditMediaComponent implements OnInit {

  medId: string;
  media: any[];
  mediaStatus: string;

  constructor(private route: ActivatedRoute, private router: Router, private mediaService: MediaService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.medId = params.mediaId;
      }
    )

    this.mediaService.searchMedia(this.medId).subscribe((media: any[]) =>{
      this.media=media;
    })
    this.mediaService.searchMedia(this.medId).subscribe((mediaStatus: string) =>{
      this.mediaStatus=mediaStatus;
    })

  }

  updateMedia(title: string, mediaType: string, duration: number){
    if (mediaType === "DVD" || mediaType ==="VHS") {
      this.mediaService.updateMedia(this.medId, title, mediaType, duration, this.mediaStatus).subscribe(() =>{
        window.alert("Media edited!");
      });
    } else {
      window.alert("Invalid media type!");
    }
    this.router.navigate(['/media']);
  }

}
