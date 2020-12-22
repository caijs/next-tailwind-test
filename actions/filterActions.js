import config from '../configs/configs';
import * as types from '../store/actionTypes';

export const requestFilters = () => dispatch => {
  dispatch({
    type: types.REQUEST_FILTERS,
  });
  fetch(`${config.API_URL}/filters`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: types.SUCCESS_FILTERS,
        filters: data,
      });
    })
    .catch(error => {
      dispatch({
        type: types.FAIL_FILTERS,
        error,
      });
    });
}
