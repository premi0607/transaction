import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranserviceService } from '../transervice.service';

@Component({
  selector: 'app-display-expense',
  templateUrl: './display-expense.component.html',
  styleUrls: ['./display-expense.component.css']
})
export class DisplayExpenseComponent {

  expense:any=[];
  DelId:any;
  newmovie:any={
    "name": "",
    "amount": 0,
    "date": 0,
    "desc": ""
  }

  constructor(private http: HttpClient,  private router:Router, private transService: TranserviceService) {}
  ngOnInit() {
    this.http
      .get('https://648a952117f1536d65e94eb1.mockapi.io/expense')
      .subscribe((val: any) => {
        this.expense = val;
        console.log(val);
      });
  }

  DelMovie(ex: any) {
    this.DelId = ex.id;
    return this.http
      .delete(
        'https://648a952117f1536d65e94eb1.mockapi.io/expense' + '/' + this.DelId
      )
      .subscribe((val: any) => {
        this.getMovie();

        //  this.movies=val;
        //console.log(val);
      });
  }

  UpdateExpense(id:any){
    this.router.navigate(['updateexpense',id]);
  }

  AddExpense(name:string,amount:string,date:string,desc:string){
    this.newmovie.name = name;
    this.newmovie.amount = amount;
    this.newmovie.date= date;
    this.newmovie.desc = desc;
    
    this.transService.createExpense(this.newmovie);
    this.getMovie();
  

  }

  getMovie(){

    this.http
      .get('https://648a952117f1536d65e94eb1.mockapi.io/expense')
      .subscribe((val: any) => {
        this.expense = val;
        console.log(val);
      });


  }

}
