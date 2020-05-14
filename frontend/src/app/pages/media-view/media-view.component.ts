import { Component, OnInit } from '@angular/core';
import {MediaService} from "../../media.service";

@Component({
  selector: 'app-task-view',
  templateUrl: './media-view.component.html',
  styleUrls: ['./media-view.component.scss']
})
export class MediaViewComponent implements OnInit {

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
  }

  createNewMedia(){
    this.mediaService.createMedia('test title', 'DVD', 80, 'avaliable').subscribe((response: any) =>{
      console.log(response);
    });

  }

}
