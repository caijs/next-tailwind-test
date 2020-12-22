import * as types from '../store/actionTypes';
import initialState from './initialState';

export function filters(state = initialState.filters, action) {
  switch (action.type) {
    case types.SUCCESS_FILTERS:
      return action.filters;
    default:
      return state;
  }
}
