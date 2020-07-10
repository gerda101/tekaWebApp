import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";
import {CustomerService} from "./customer.service";
import {MediaService} from "./media.service";

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private webRequestService: WebRequestService, private customerService: CustomerService, private mediaService: MediaService) { }

  createRent(customer: string, media: string, rentDate: Date, dueDate: Date, status: string){
    return this.webRequestService.post('rent', { customer, media, rentDate, dueDate, status});
  }

  getRent() {
    return this.webRequestService.get('rent');
  }

  deleteRent(id: string){
    return this.webRequestService.delete(`rent/${id}`);
  }

  updateRent(id: string, customer: string, media: string){
    return this.webRequestService.patch(`rent/${id}`, { customer, media});
  }
}
