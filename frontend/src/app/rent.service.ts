import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";
import {CustomerService} from "./customer.service";
import {MediaService} from "./media.service";

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private webRequestService: WebRequestService) { }

  createRent(customer: CustomerService, media: MediaService, rentDate: number, dueDate: number, status: string){
    return this.webRequestService.post('rent', { customer, media, rentDate, dueDate, status});
  }

  getRent() {
    return this.webRequestService.get('rent');
  }
}
