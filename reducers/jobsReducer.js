import * as types from '../store/actionTypes';
import initialState from './initialState';

export function jobs(state = initialState.jobs, action) {
  switch (action.type) {
    case types.SUCCESS_JOBS:
      return action.data.jobs;
    default:
      return state;
  }
}

export function totalJobsCount(state = initialState.totalJobsCount, action) {
  switch (action.type) {
    case types.SUCCESS_JOBS:
      return action.data.totalCount;
    default:
      return state;
  }
}

export function requestInProgress(state = initialState.requestInProgress, action) {
  switch (action.type) {
    case types.REQUEST_JOBS:
      return true;
    case types.SUCCESS_JOBS:
    case types.FAIL_JOBS:
      return false;
    default:
      return state;
  }
}