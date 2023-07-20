import { Actions, createEffect, ofType } from '@ngrx/effects';

import { tap } from 'rxjs';

import { increment, decrement } from './counter.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        tap((action) => {
          console.log(action);
          localStorage.setItem('count', action.value.toString());
        })
      ),
    { dispatch: false }
  );
}
