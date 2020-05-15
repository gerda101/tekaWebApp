import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MediaService} from "../../media.service";

@Component({
  selector: 'app-view',
  templateUrl: './media-view.component.html',
  styleUrls: ['./media-view.component.scss']
})
export class MediaViewComponent implements OnInit {

  media: any[];
  medId: string;

  constructor(private mediaService: MediaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.mediaService.getMedia().subscribe((media: any[]) =>{
      this.media=media;
    })

    this.route.params.subscribe(
      (params: Params) => {
        if (params.mediaId) {
          this.medId = params.mediaId;
        } else {
          this.medId = undefined;
        }
      }
    )
  }

  onClickMediaDelete(){
    this.mediaService.deleteMedia(this.medId).subscribe((res: any) => {
      this.router.navigate(['/media']);
      console.log();
    })
  }
}
