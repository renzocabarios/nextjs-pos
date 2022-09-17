import { createAction, props } from '@ngrx/store';
import { IItem } from '../../interfaces';

export const fetchItems = createAction('[Item View] Item View Loaded');

export const fetchItemsSuccess = createAction(
  '[Item API] Fetch Item Success',
  props<{ data: IItem[] }>()
);

export const deleteItem = createAction(
  '[Item API] Delete Item',
  props<{ _id: string }>()
);
