import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchItems, deleteItem } from '../../states/item/item.action';
import { selectItemData } from '../../states/item';
import { DATATABLE } from '../../constants';
import {
  DatatableData,
  DatatableHeader,
  DatatableKeys,
  IAction,
  IItem,
} from 'src/app/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit {
  header: DatatableHeader = [];
  keys: DatatableKeys = [];
  data: DatatableData<IItem> = [];
  actions: IAction[] = [];

  constructor(private store: Store, private router: Router) {
    const { HEADER, KEYS } = DATATABLE.ITEM;
    this.header = HEADER;
    this.keys = KEYS;
    this.actions = [
      {
        title: 'Edit',
        onClick: (_id: string) => {
          this.router.navigateByUrl(`item/${_id}/edit`);
        },
      },
      {
        title: 'Delete',
        onClick: (_id: string) => {
          this.store.dispatch(deleteItem({ _id }));
        },
      },
    ];
  }

  ngOnInit(): void {
    this.store.dispatch(fetchItems());
    this.store.select(selectItemData).subscribe((e) => {
      this.data = e;
    });
  }

  add(): void {
    this.router.navigateByUrl(`item/add`);
  }
}
