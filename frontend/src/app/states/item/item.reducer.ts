import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './item.action';
import { IItemState } from '../../interfaces';

const initialState: IItemState = {
  entries: [],
};

const itemsReducer = createReducer(
  initialState,
  on(actions.fetchItemsSuccess, (state, { data }) => ({
    ...state,
    entries: data,
  }))
);

export function reducer(state: IItemState | undefined, action: Action) {
  return itemsReducer(state, action);
}
