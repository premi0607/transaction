import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranserviceService } from '../transervice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent {
  expenseId:any;
  expense:any=[]
  constructor(private http: HttpClient,private transService: TranserviceService,
    private route: ActivatedRoute,private router:Router){}

  ngOnInit(): void{
      this.expenseId = this.route.snapshot.params['id'];

      this.http.get('https://648a952117f1536d65e94eb1.mockapi.io/expense'+'/'+this.expenseId) .subscribe((val: any) => {
        this.expense=val;
        console.log(val);
        
    });

  }
  onSubmit(){
    this.transService.updatateExpense(this.expenseId,this.expense).subscribe(()=>{
      this.router.navigate(['/expenselist'])

    });
    // this.getMovie();
    //this.goToEmployeeList();
    
  }

  goToEmployeeList(){
    };

  getMovie(){

      this.http
        .get('https://648a952117f1536d65e94eb1.mockapi.io/movies')
        .subscribe((val: any) => {
          this.expense = val;
          console.log(val);
        });
  
  }

}
