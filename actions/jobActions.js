import config from '../configs/configs';
import * as types from '../store/actionTypes';
import { makeRequestQuery } from './helpers/transform';

export const searchItems = (search, query) => dispatch => {
  dispatch({
    type: types.REQUEST_JOBS,
    query,
  });
  fetch(`${config.API_URL}/jobs${makeRequestQuery({search, query})}`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: types.SUCCESS_JOBS,
        data,
      });

    })
    .catch(error => {
      dispatch({
        type: types.FAIL_JOBS,
        error,
      });
    });
}
