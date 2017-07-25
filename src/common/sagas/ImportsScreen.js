import { put, call } from 'redux-saga/effects';
import { identity, compose, omit, keys, map } from 'ramda';
import { takeEvery } from 'redux-saga';
import { actions as importsActions } from '../redux/ImportsScreen';
import client from '../utils/ApiClient';
import { actions as appActions } from '~/src/common/redux/App';

export default function* root() {
  yield takeEvery(importsActions.importForm.REQUEST, function* run(a) {
    try {
      const data = new FormData();
      compose(
        map((key) => data.set(key, a.payload[key])), keys, omit(['attached', 'importType'])
      )(a.payload);
      data.append('file', a.payload.attached);
      const response = yield call(client.upload, `${a.payload.importType}/import`, {
        data, fetchConfig: { bodyEncoder: identity },
      });

      yield put(importsActions.importForm.success(response));
    } catch (error) {
      yield put(importsActions.importForm.failure(error));
    }
  });

  yield takeEvery(importsActions.importForm.FAILURE, function* run(a) {
    yield put(appActions.updateMessage('Import error'));
  })
}
