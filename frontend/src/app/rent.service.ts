import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";
import {CustomerService} from "./customer.service";
import {MediaService} from "./media.service";

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private webRequestService: WebRequestService, private customerService: CustomerService, private mediaService: MediaService) { }

  createRent(customer: string, media: string, rentDate: string, dueDate: string, status: string){
    return this.webRequestService.post('rent', { customer, media, rentDate, dueDate, status});
  }

  getRent() {
    return this.webRequestService.get('rent');
  }
}
