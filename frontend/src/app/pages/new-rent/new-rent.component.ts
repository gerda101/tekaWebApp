import { Component, OnInit } from '@angular/core';
import {RentService} from "../../rent.service";
import {MediaService} from "../../media.service";
import {CustomerService} from "../../customer.service";

@Component({
  selector: 'app-new-rent',
  templateUrl: './new-rent.component.html',
  styleUrls: ['./new-rent.component.scss']
})
export class NewRentComponent implements OnInit {

  media: any[];
  customer: any[];
  d: Date;
  dued: Date;

  constructor(private rentService: RentService, private mediaService: MediaService, private customerService: CustomerService) { }

  ngOnInit(): void {

    this.mediaService.getMedia().subscribe((media: any[]) =>{
      this.media=media;
    })
    this.customerService.getCustomer().subscribe((customer: any[]) =>{
      this.customer=customer;
    })

    this.d = new Date();
    this.dued = new Date();
    this.dued.setDate(this.dued.getDate()+30);

  }

  createRent() {

    var media = this.customerCheckBox();
    var customer = this.mediaCheckBox();

    this.rentService.createRent(customer, media, this.d.toDateString(), this.dued.toDateString(), status = "ONGOING").subscribe((response: any) => {
      console.log(response);

      //modify media status => UNAVALIABLE

      window.alert("New rent added!");
      window.location.reload();
    });
  }

  mediaCheckBox() {
    var rows = document.getElementById("mediatable")[0].rows;
    var checked = 0;
    var media = null;

    for (var i=0; i<=rows; i++) {
      var checkBox = document.getElementById("mediaCheck") as HTMLInputElement;
      if (checkBox.checked === true) {
        checked++;
        media = checkBox.value;
      }
    }
    if (checked == 1) {
      return media;
    } else {
      window.alert("No, or not 1 media selected!");
      return media;
    }
  }

  customerCheckBox() {
    var rows = document.getElementById("custable")[0].rows;
    var checked = 0;
    var customer = null;

    for (var i=0; i<=rows; i++) {
      var checkBox = document.getElementById("cusCheck") as HTMLInputElement;
      if (checkBox.checked === true) {
        checked++;
        customer = checkBox.value;
      }
    }
    if (checked == 1) {
      return customer;
    } else {
      window.alert("No, or not 1 media selected!");
      return customer;
    }
  }

}
