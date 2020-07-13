import { Component, OnInit } from '@angular/core';
import {RentService} from "../../rent.service";
import {MediaService} from "../../media.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './rent-view.component.html',
  styleUrls: ['./rent-view.component.scss']
})
export class RentViewComponent implements OnInit {

  rent: any[];
  rentId: string;

  media: any[];
  medId:string;

  constructor(private rentService: RentService, private route: ActivatedRoute, private router: Router, private mediaService: MediaService) { }

  ngOnInit(): void {

    this.rentService.getRent().subscribe((rent: any[]) =>{
      this.rent=rent;
    })

    this.mediaService.getMedia().subscribe((media: any[]) =>{
      this.media=media;
    })

    this.route.params.subscribe(
      (params: Params) => {
        if (params.rentId) {
          this.rentId = params.rentId;
          this.medId = params.mediaId;
        } else {
          this.rentId = undefined;
        }
      }
    )
  }

  onClickRentDelete(){
    if (this.rentId != undefined) {
      this.rentService.deleteRent(this.rentId).subscribe((res: any) => {
        console.log("Rent deleted!");
      })

      this.mediaService.updateMediaStatus(this.medId, 'AVALIABLE').subscribe((response: any) => {
        console.log(response, "Media status set to avaliable!");
      });

      window.alert("Rent deleted!");
      this.router.navigate(['/rent']);
    } else {
      window.alert("No rent selected!");
    }
  }
}

