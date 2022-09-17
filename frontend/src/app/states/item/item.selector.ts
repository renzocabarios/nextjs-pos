import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IItemState } from '../../interfaces';

export const selectItems = createFeatureSelector<IItemState>('items');

export const selectItemData = createSelector(
  selectItems,
  (state: IItemState) => state.entries
);
