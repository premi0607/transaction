import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranserviceService } from '../transervice.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent {
  outcome:number=0;
  income:number=65000;
  expense:any;
  newBalance:any=0;

  constructor(private http: HttpClient,  private router:Router, private transService: TranserviceService) {}
  ngOnInit() {
    this.http
      .get('https://648a952117f1536d65e94eb1.mockapi.io/expense')
      .subscribe((val: any) => {
        this.expense = val;
        console.log(this.expense);
        this.getamt();
      });

  }
  getamt(){
    for (var val of this.expense){
      this.outcome += val.amount;
    }
    this.newBalance=this.income-this.outcome;
  }
}
