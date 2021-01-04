import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transaction } from '../common/transaction';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://zubairabubakar.co:8080/fonbnk/api/transactions/'

  constructor(private httpClient: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.transactions)
    );
  }
}

interface GetResponse {
  _embedded: {
    transactions: Transaction[];
  }
}

