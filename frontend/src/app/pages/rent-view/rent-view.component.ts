import { Component, OnInit } from '@angular/core';
import {RentService} from "../../rent.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './rent-view.component.html',
  styleUrls: ['./rent-view.component.scss']
})
export class RentViewComponent implements OnInit {

  rent: any[];
  rentId: string;

  constructor(private rentService: RentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.rentService.getRent().subscribe((rent: any[]) =>{
      this.rent=rent;
    })

    this.route.params.subscribe(
      (params: Params) => {
        if (params.mediaId) {
          this.rentId = params.mediaId;
        } else {
          this.rentId = undefined;
        }
      }
    )
  }

  onClickRentDelete(){
    this.rentService.deleteRent(this.rentId).subscribe((res: any) => {
      this.router.navigate(['/rent']);
      console.log();
    })
  }
}

