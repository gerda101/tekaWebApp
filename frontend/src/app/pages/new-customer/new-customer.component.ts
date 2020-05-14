import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../customer.service";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  createCustomer(name: string, phone: number, address: string){
    if (phone.toString().length===10 || phone.toString().length===11) {
      this.customerService.createCustomer(name, phone, address).subscribe((response: any) =>{
        console.log(response);
        window.alert("New customer added!");
        window.location.reload();
      });
    } else {
      window.alert("Invalid phone number length!");
    }

  }
}
