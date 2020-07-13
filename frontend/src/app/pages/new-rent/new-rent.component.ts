import { Component, OnInit } from '@angular/core';
import {RentService} from "../../rent.service";
import {MediaService} from "../../media.service";
import {CustomerService} from "../../customer.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-new-rent',
  templateUrl: './new-rent.component.html',
  styleUrls: ['./new-rent.component.scss']
})
export class NewRentComponent implements OnInit {

  media: any[];
  medId:string;
  mediaStatus: string;

  customer: any[];
  customerId: string;

  d: Date;
  dued: Date;

  constructor(private route: ActivatedRoute, private router: Router, private rentService: RentService, private mediaService: MediaService, private customerService: CustomerService) { }

  ngOnInit(): void {

    this.mediaService.getMedia().subscribe((media: any[]) =>{
      this.media=media;
    })

    this.customerService.getCustomer().subscribe((customer: any[]) =>{
      this.customer=customer;
    })

    this.route.params.subscribe(
      (params: Params) => {
        this.medId = params.mediaId;
        this.mediaStatus = params.mediaStatus;
        this.customerId = params.customerId;
      }
    )

    this.d = new Date();
    this.dued = new Date();
    this.dued.setDate(this.dued.getDate()+30);

  }

  createRent() {
    if (this.mediaStatus === 'AVALIABLE') {
      this.rentService.createRent(this.customerId, this.medId, this.d, this.dued, status = "ONGOING").subscribe((response: any) => {
        console.log(response);
      });

      this.mediaService.updateMediaStatus(this.medId, 'UNAVALIABLE').subscribe((response: any) => {
        console.log(response, "Media status set to unavaliable!");
      });

      window.alert("New rent added!");
      this.router.navigate(['/rent']);
    } else {
      window.alert("Selected media is unavaliable, please select avaliable media!");
    }
  }

}
