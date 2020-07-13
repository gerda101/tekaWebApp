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

  getMedia() {
    return this.webRequestService.get('media');
  }

  searchMedia(id: string) {
    return this.webRequestService.get(`media/${id}`);
  }

  deleteMedia(id: string){
    return this.webRequestService.delete(`media/${id}`);
  }

  updateMedia(id: string, title: string, mediaType: string, duration: number, mediaStatus: string){
    return this.webRequestService.patch(`media/${id}`, { title, mediaType, duration , mediaStatus});
  }

  updateMediaStatus(id: string, mediaStatus: string){
    return this.webRequestService.patch(`media/${id}`, {mediaStatus});
  }

}
