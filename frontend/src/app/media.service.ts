import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private webRequestService: WebRequestService) { }

  createMedia(title: string, mediaType: string, duration: number, mediaStatus='avaliable'){
    return this.webRequestService.post('media', { title, mediaType, duration , mediaStatus});
  }
}
