import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayExpenseComponent } from './display-expense/display-expense.component';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';
import { DisplayCardComponent } from './display-card/display-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayExpenseComponent,
    UpdateExpenseComponent,
    DisplayCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
