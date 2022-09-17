import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { IHttpResponse, IItem } from 'src/app/interfaces';
import { ApiService } from '../../services/api/api.service';
import * as ItemAction from './item.action';

@Injectable()
export class ItemEffects {
  constructor(private actions$: Actions<any>, private api: ApiService) {}

  fetchItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemAction.fetchItems),
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
          .pipe(map(() => ItemAction.fetchItems()))
      )
    )
  );
}
