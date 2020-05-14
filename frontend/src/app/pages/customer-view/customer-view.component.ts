import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../customer.service";

@Component({
  selector: 'app-task-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customer: any[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    this.customerService.getCustomer().subscribe((customer: any[]) =>{
      this.customer=customer;
    })
  }
}

