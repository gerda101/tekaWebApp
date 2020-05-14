import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-rent',
  templateUrl: './new-rent.component.html',
  styleUrls: ['./new-rent.component.scss']
})
export class NewRentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*createRent(customer: customer, media: media, rentDate: number, dueDate: number, status="ONGOING"){
      this.RentService.createRent(customer, media, rentDate, dueDate, status).subscribe((response: any) =>{
        console.log(response);
        window.alert("New rent added!");
        window.location.reload();
      });*/
}
