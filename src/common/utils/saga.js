import { put, call } from 'redux-saga/effects';

export function* callApi({ apiFn, actionData, actionType }) {
  try {
    const { data, error } = yield call(apiFn, actionData);

    if (data && actionType.SUCCESS) {
      yield put({ type: actionType.SUCCESS, payload: data });
    } else if (actionType.FAILURE) {
      yield put({ type: actionType.FAILURE, error });
    }
  } catch (error) {
    if (error) {
      console.log('saga error', error);
    }
  }
}
