import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from './core.state';
import * as ItemReducer from './item/item.reducer';
import * as TransacReducer from './transac/transac.reducer';

export const reducers: ActionReducerMap<State> = {
  items: ItemReducer.reducer,
  transac: TransacReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
