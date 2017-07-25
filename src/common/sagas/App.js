import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { LOCATION_CHANGE } from 'react-router-redux';
import { actions as appActions } from '~/src/common/redux/App';

export default function* root() {
  yield takeEvery(appActions.signOut.toString(), function* run() {
    window.location.reload();
  })

  yield takeEvery(LOCATION_CHANGE.toString(), function* run() {
    yield put(appActions.closeDrawer())
    yield put(appActions.closeModal())
  })
}
