import { createAction, props } from '@ngrx/store';

export const addItemToCart = createAction(
  '[Transaction Page] Add Item To Cart',
  props<{ _id: string }>()
);

export const addTransaction = createAction(
  '[Transaction API] Add Transaction',
  props<{ items: string[] }>()
);

export const addTransactionSuccess = createAction(
  '[Transaction API] Add Transaction Success'
);
