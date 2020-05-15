import { Injectable } from '@angular/core';
import {WebRequestService} from "./web-request.service";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private webRequestService: WebRequestService) { }

  createCustomer(name: string, phone: number, address: string){
    return this.webRequestService.post('customer', { name, phone, address});
  }

  getCustomer() {
    return this.webRequestService.get('customer');
  }

  searchCustomer(id: string) {
    return this.webRequestService.get(`customer/${id}`);
  }

  deleteCustomer(id: string){
    return this.webRequestService.delete(`customer/${id}`);
  }

  updateCustomer(id: string, name: string, phone: number, address: string){
    return this.webRequestService.patch(`customer/${id}`, { name, phone, address});
  }
}
