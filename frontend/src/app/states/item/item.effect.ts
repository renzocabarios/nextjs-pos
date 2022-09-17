import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, tap } from 'rxjs/operators';
import { IHttpResponse, IItem } from 'src/app/interfaces';
import { ApiService } from '../../services/api/api.service';
import * as ItemAction from './item.action';

@Injectable()
export class ItemEffects {
  constructor(
    private actions$: Actions<any>,
    private api: ApiService,
    private router: Router
  ) {}

  fetchItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemAction.fetchItems, ItemAction.deleteItemSucces),
      switchMap(() =>
        this.api
          .get<IHttpResponse<IItem>>('item')
          .pipe(map(({ data }) => ItemAction.fetchItemsSuccess({ data })))
      )
    )
  );

  deleteItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemAction.deleteItem),
      switchMap(({ _id }) =>
        this.api
          .delete<IHttpResponse<IItem>>(`item/${_id}`)
          .pipe(map(() => ItemAction.deleteItemSucces()))
      )
    )
  );

  updateItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemAction.updateItem),
      switchMap(({ data: { _id, ...rest } }) => {
        return this.api
          .update<IHttpResponse<IItem>>(`item/${_id}`, rest)
          .pipe(map(() => ItemAction.updateItemSucces()));
      })
    )
  );

  updateItemSucces$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ItemAction.updateItemSucces),
        tap(() => this.router.navigate(['/item']))
      ),
    { dispatch: false }
  );

  createItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemAction.createItem),
      switchMap(({ data: { _id, ...rest } }) => {
        return this.api
          .post<IHttpResponse<IItem>>(`item`, rest)
          .pipe(map(() => ItemAction.createItemSuccess()));
      })
    )
  );

  createItemSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ItemAction.createItemSuccess),
        tap(() => this.router.navigate(['/item']))
      ),
    { dispatch: false }
  );
}
