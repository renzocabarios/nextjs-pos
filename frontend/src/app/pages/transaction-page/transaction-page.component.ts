import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchItems, selectItemData } from 'src/app/states/item';
import {
  addItemToCart,
  selectTransacCart,
  addTransaction,
} from 'src/app/states/transac';

@Component({
  selector: 'transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.scss'],
})
export class TransactionPageComponent implements OnInit {
  data: any[] = [];
  cart: string[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchItems());
    this.store.select(selectItemData).subscribe((e) => {
      this.data = e;
    });

    this.store.select(selectTransacCart).subscribe((e) => {
      this.cart = e;
    });
  }

  addCart(_id: string) {
    this.store.dispatch(addItemToCart({ _id }));
  }

  addTransaction() {
    this.store.dispatch(addTransaction({ items: this.cart }));
  }
}
