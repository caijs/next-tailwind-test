import * as types from '../store/actionTypes';
import initialState from './initialState';

const SORT_ORDER = {
  asc: 'asc',
  desc: 'desc'
};

export function query(state = initialState.query, action) {
  let newState;
  switch (action.type) {
    case types.ALTER_QUERY_FILTER:
      newState = { ...state };
      if (state.filters[action.category] === action.value) {
        delete newState.filters[action.category];
      } else {
        newState.filters[action.category] = action.value;
      }
      return newState;
    case types.ALTER_QUERY_SORTER:
      newState = { ...state };
      if (!state.sorters[action.sorter]) newState.sorters[action.sorter] = SORT_ORDER.asc;
      else if (state.sorters[action.sorter] == SORT_ORDER.asc) newState.sorters[action.sorter] = SORT_ORDER.desc;
      else if (state.sorters[action.sorter] == SORT_ORDER.desc) delete state.sorters[action.sorter];
      return newState;
    default:
      return state;
  }
}
