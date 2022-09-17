import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITransacState } from '../../interfaces';

export const selectTransac = createFeatureSelector<ITransacState>('transac');

export const selectTransacCart = createSelector(
  selectTransac,
  (state: ITransacState) => state.cart
);
