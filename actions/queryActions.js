import config from '../configs/configs';
import * as types from '../store/actionTypes';

export const alterQueryFilter = (category, value) => dispatch => {
  dispatch({
    type: types.ALTER_QUERY_FILTER,
    category, 
    value,
  });

}

export const alterQuerySorter = sorter => dispatch => {
  dispatch({
    type: types.ALTER_QUERY_SORTER,
    sorter,
  });
}