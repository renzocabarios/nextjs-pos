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

export const deleteItemSucces = createAction('[Item API] Delete Item Success');

export const updateItem = createAction(
  '[Item API] Update Item',
  props<{ data: IItem }>()
);

export const updateItemSucces = createAction('[Item API] Update Item Success');

export const createItem = createAction(
  '[Item API] Create Item',
  props<{ data: IItem }>()
);

export const createItemSuccess = createAction('[Item API] Create Item Success');
