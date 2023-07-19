import { createSelector } from "@ngrx/store";

export const selectCount = (state:{counter:number}) => state.counter;

export const selectCountDouble = createSelector(selectCount, (state)=> state * 2);