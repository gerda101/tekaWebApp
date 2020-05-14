import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private webRequestService: WebRequestService) { }

  /*createRent(customer: Customer, media: Media, rentDate: number, dueDate: number, status: string){
    return this.webRequestService.post('rent', { customer, media, rentDate, dueDate, status});
  }*/

  getRent() {
    return this.webRequestService.get('rent');
  }
}
