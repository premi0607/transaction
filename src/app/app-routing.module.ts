import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayExpenseComponent } from './display-expense/display-expense.component';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';
import { DisplayCardComponent } from './display-card/display-card.component';

const routes: Routes = [
  {path:'expenselist',component:DisplayExpenseComponent},
  {path:'updateexpense/:id',component:UpdateExpenseComponent},
  {path:'carddetail', component:DisplayCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
