import { Action, createReducer, on } from '@ngrx/store';
import { ITransacState } from '../../interfaces';
import * as actions from './transac.action';

const initialState: ITransacState = {
  cart: [],
};

const transacReducer = createReducer(
  initialState,
  on(actions.addItemToCart, (state, { _id }) => ({
    ...state,
    cart: [_id, ...state.cart],
  }))
);

export function reducer(state: ITransacState | undefined, action: Action) {
  return transacReducer(state, action);
}
