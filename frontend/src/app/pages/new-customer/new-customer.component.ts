import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  createCustomer(name: string, phone: number, address: string){
    if (phone.toString().length===10 || phone.toString().length===11) {
      this.customerService.createCustomer(name, phone, address).subscribe((response: any) =>{
        console.log(response);
        window.alert("New customer added!");
        this.router.navigate(['/customer']);
      });
    } else {
      window.alert("Invalid phone number length!");
    }

  }
}
