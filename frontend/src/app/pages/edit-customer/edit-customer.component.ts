import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CustomerService} from "../../customer.service";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customerId: string;
  customer: any[];

  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.customerId = params.customerId;
      }
    )

    this.customerService.searchCustomer(this.customerId).subscribe((customer: any[]) =>{
      this.customer=customer;
    })

  }

  updateCustomer(name: string, phone: number, address: string){
      this.customerService.updateCustomer(this.customerId, name, phone, address).subscribe(() =>{
        window.alert("Customer edited!");
      });
    this.router.navigate(['/customer']);
  }

}
