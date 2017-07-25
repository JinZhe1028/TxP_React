import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { actions as loginActions } from '../redux/LoginScreen';
import { actions as appActions } from '../redux/App';
import { push } from 'react-router-redux';
import client from '../utils/ApiClient';

export default function* root() {
  yield takeEvery(loginActions.signInForm.REQUEST, function* run({ payload }) {
    try {
      const request = yield call(client.post, 'auth', { data: payload });
      yield put(loginActions.signInForm.success(request));
    } catch (error) {
      yield put(loginActions.signInForm.failure(error));
    }
  });

  yield takeEvery(loginActions.signInForm.SUCCESS, function* run({ payload }) {
    yield put(appActions.authData(payload.user));
    yield put(appActions.updateMessage(payload.message));
    yield put(push('/app/nav/salesRepDailies'));
  });

  yield takeEvery(loginActions.signInForm.FAILURE, function* run({ payload }) {
    yield put(loginActions.wrongCredentials(payload));
  });
}
