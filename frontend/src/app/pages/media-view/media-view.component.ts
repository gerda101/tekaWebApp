import { Component, OnInit } from '@angular/core';
import {MediaService} from "../../media.service";

@Component({
  selector: 'app-task-view',
  templateUrl: './media-view.component.html',
  styleUrls: ['./media-view.component.scss']
})
export class MediaViewComponent implements OnInit {

  media: any[];

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {

    this.mediaService.getMedia().subscribe((media: any[]) =>{
      this.media=media;
    })
  }
}
