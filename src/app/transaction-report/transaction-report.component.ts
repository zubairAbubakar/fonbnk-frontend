import { Component, OnInit } from '@angular/core';
import { Transaction } from '../common/transaction';
import { TransactionService } from '../services/transaction.service';


@Component({
  selector: 'app-transaction-report',
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.css']
})
export class TransactionReportComponent implements OnInit {

  transactions: Transaction[]; 
  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.listTransactions();
  }

  listTransactions() {
    this.transactionService.getTransactions().subscribe(
      data => {
        this.transactions = data;
      }
    )
  }


}
