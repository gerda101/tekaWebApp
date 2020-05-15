import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../customer.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customer: any[];
  customerId: string;

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.customerService.getCustomer().subscribe((customer: any[]) =>{
      this.customer=customer;
    })

    this.route.params.subscribe(
      (params: Params) => {
        if (params.customerId) {
          this.customerId = params.customerId;
        } else {
          this.customer = undefined;
        }
      }
    )
  }

  onClickCustomerDelete(){
    this.customerService.deleteCustomer(this.customerId).subscribe((res: any) => {
      this.router.navigate(['/customer']);
      console.log();
    })
  }
}

