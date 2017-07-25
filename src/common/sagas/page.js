import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { crudActions } from 'redux-crud-store';
import { actions as appActions } from '~/src/common/redux/App';

export default function* root() {
  yield takeEvery(crudActions.FETCH_SUCCESS, function* run() {
    yield put(appActions.closeModal());
    yield put(appActions.updateMessage('Data fetched'));
  });

  yield takeEvery(crudActions.UPDATE_SUCCESS, function* run() {
    yield put(appActions.closeModal());
    yield put(appActions.updateMessage('Record updated'));
  });

  yield takeEvery(crudActions.CREATE_SUCCESS, function* run() {
    yield put(appActions.closeModal());
    yield put(appActions.updateMessage('Record created'));
  });

  yield takeEvery(crudActions.FETCH_ERROR, function* run() {
    yield put(appActions.updateMessage('Data fetch error'));
  });

  yield takeEvery(crudActions.UPDATE_ERROR, function* run() {
    yield put(appActions.updateMessage('Record updated error'));
  });

  yield takeEvery(crudActions.CREATE_ERROR, function* run() {
    yield put(appActions.updateMessage('Record created error'));
  });
}
