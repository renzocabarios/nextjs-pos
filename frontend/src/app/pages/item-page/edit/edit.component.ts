import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectItemData } from 'src/app/states/item';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { updateItem } from '../../../states/item/item.action';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl(''),
    basePrice: new FormControl(''),
  });

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.store.select(selectItemData).subscribe((e) => {
        const data = e.find((e) => e._id == params['id']);
        this.formGroup.setValue({
          name: data?.name ?? '',
          basePrice: data?.basePrice.toString() ?? '',
        });
      });
    });
  }

  submit(): void {
    console.log(this.formGroup.value);
    const { name, basePrice } = this.formGroup.value;
    this.store.dispatch(
      updateItem({
        data: {
          name: name ?? '',
          basePrice: Number(basePrice),
          _id: this.route.snapshot.paramMap.get('id') ?? '',
        },
      })
    );
  }
}
