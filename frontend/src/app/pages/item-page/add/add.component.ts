import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createItem } from '../../../states/item/item.action';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl(''),
    basePrice: new FormControl(''),
  });

  constructor(private store: Store) {}

  ngOnInit(): void {}

  submit(): void {
    const { name, basePrice } = this.formGroup.value;
    this.store.dispatch(
      createItem({
        data: {
          name: name ?? '',
          basePrice: Number(basePrice),
        },
      })
    );
  }
}
