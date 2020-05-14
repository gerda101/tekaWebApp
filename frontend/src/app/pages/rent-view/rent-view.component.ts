import { Component, OnInit } from '@angular/core';
import {RentService} from "../../rent.service";

@Component({
  selector: 'app-view',
  templateUrl: './rent-view.component.html',
  styleUrls: ['./rent-view.component.scss']
})
export class RentViewComponent implements OnInit {

  rent: any[];

  constructor(private rentService: RentService) { }

  ngOnInit(): void {

    this.rentService.getRent().subscribe((rent: any[]) =>{
      this.rent=rent;
    })
  }
}

