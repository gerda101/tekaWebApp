import { Component, OnInit } from '@angular/core';
import {RentService} from "../../rent.service";
import {MediaService} from "../../media.service";
import {CustomerService} from "../../customer.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-edit-rent',
  templateUrl: './edit-rent.component.html',
  styleUrls: ['./edit-rent.component.scss']
})
export class EditRentComponent implements OnInit {

  media: any[];
  customer: any[];
  medId: string;
  customerId: string;
  rent: any[];
  rentId: string;

  constructor(private route: ActivatedRoute, private router: Router, private rentService: RentService, private mediaService: MediaService, private customerService: CustomerService) { }

  ngOnInit(): void {

    this.rentService.getRent().subscribe((rent: any[]) =>{
      this.rent=rent;
    })
    this.mediaService.getMedia().subscribe((media: any[]) =>{
      this.media=media;
    })
    this.customerService.getCustomer().subscribe((customer: any[]) =>{
      this.customer=customer;
    })

    this.route.params.subscribe(
      (params: Params) => {
        this.rentId = params.rentId;
        this.medId = params.mediaId;
        this.customerId = params.customerId;
      }
    )
  }

  updateRent(){
    this.rentService.updateRent(this.rentId, this.customerId, this.medId).subscribe((response: any) => {
      console.log(response);

      window.alert("Rent data modified!");
      window.location.reload();
    });
  }

}
