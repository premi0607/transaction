import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranserviceService {

  constructor(private http: HttpClient) { }

  updatateExpense(id:any, expense:any){
    return this.http.put('https://648a952117f1536d65e94eb1.mockapi.io/expense'+'/'+id, expense)
  }

  createExpense(newmovie:any){
    return this.http.post('https://648a952117f1536d65e94eb1.mockapi.io/expense', newmovie) .subscribe((val: any) => {
    });
  }
}
