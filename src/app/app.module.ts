import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from './services/transaction.service';



@NgModule({
  declarations: [
    AppComponent,
    TransactionReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
