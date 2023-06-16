import { Component } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent {
  newBalance:any;
  tot:any;
  carddetail=[{
    "AccHolder":"Premikkha S",
    "Balance":15000,
    "AccNumber":"4321 5642 1229 2367",
    "ExpiryDate":"10/23"
  }];



}
