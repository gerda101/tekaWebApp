import { Component, OnInit } from '@angular/core';
import {RentService} from "../../rent.service";

import {CustomerService} from "../../customer.service";
import {MediaService} from "../../media.service";

@Component({
  selector: 'app-new-rent',
  templateUrl: './new-rent.component.html',
  styleUrls: ['./new-rent.component.scss']
})
export class NewRentComponent implements OnInit {

  constructor(private rentService: RentService) { }

  ngOnInit(): void {
  }

  createRent(customer: CustomerService, media: MediaService, rentDate: number, dueDate: number, status="ONGOING") {
    this.rentService.createRent(customer, media, rentDate, dueDate, status).subscribe((response: any) => {
      console.log(response);
      window.alert("New rent added!");
      window.location.reload();
    });
  }
}
