import { spawn } from 'redux-saga/effects';
import { formActionSaga } from 'redux-form-saga';
import App from './App';
import LoginScreen from './LoginScreen';
import ImportsScreen from './ImportsScreen';
import crud from './crud';
import page from './page';

export default function* root() {
  yield spawn(formActionSaga);
  yield spawn(crud);
  yield spawn(page);
  yield spawn(App);
  yield spawn(LoginScreen);
  yield spawn(ImportsScreen);
}
