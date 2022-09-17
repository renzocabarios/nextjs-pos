import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, tap } from 'rxjs/operators';
import { IHttpResponse, IItem } from 'src/app/interfaces';
import { ApiService } from '../../services/api/api.service';
import * as action from './transac.action';

@Injectable()
export class TransacEffects {
  constructor(
    private actions$: Actions<any>,
    private api: ApiService,
    private router: Router
  ) {}

  createItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(action.addTransaction),
      switchMap(({ items }) => {
        console.log({ items });

        return this.api
          .post<IHttpResponse<IItem>>(`transaction`, { items })
          .pipe(map(() => action.addTransactionSuccess()));
      })
    )
  );
}
