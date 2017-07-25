import { merge } from 'ramda';
import { createActions, handleActions } from 'redux-actions';

// State
const initialState = {
  modal: { name: '', domain: '', id: '' },
  user: { },
  drawer: false,
  message: '',
};

// Actions
export const actions = createActions(
  'SIGN_OUT', 'UNAUTHORIZED', 'UNAUTHORIZED', 'WRONG_CREDENTIALS', 'AUTH_DATA', 'UPDATE_MESSAGE',
  'TOGGLE_MODAL', 'OPEN_MODAL', 'CLOSE_MODAL', 'TOGGLE_DRAWER', 'OPEN_DRAWER', 'CLOSE_DRAWER',
);

// Reducers
export default handleActions({
  [actions.authData]: (state, { payload }) => merge(state, { user: payload }),
  [actions.updateMessage]: (state, { payload }) => merge(state, { message: payload }),
  [actions.signOut]: () => {},
  [actions.unauthorized]: () => ({}),
  [actions.toggleModal]: (state, { payload }) =>
    merge(state, { modal: state.modal.name === payload.name ? initialState.modal : payload }),
  [actions.openModal]: (state, { payload }) => merge(state, { modal: payload }),
  [actions.closeModal]: (state) => merge(state, { modal: initialState.modal }),
  [actions.toggleDrawer]: (state) => merge(state, { drawer: !state.drawer }),
  [actions.openDrawer]: (state) => merge(state, { drawer: true }),
  [actions.closeDrawer]: (state) => merge(state, { drawer: false }),
}, initialState);

// Selectors
export const appSelector = (state) => state.app;
export const modalSelector = (state) => state.app.modal;
