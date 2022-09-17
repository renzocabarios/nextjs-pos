import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from './core.state';
import * as ItemReducer from './item/item.reducer';

export const reducers: ActionReducerMap<State> = {
  items: ItemReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
