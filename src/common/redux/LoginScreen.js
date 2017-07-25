import { createActions, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { createFormAction } from 'redux-form-saga';
import { merge, compose } from 'ramda';
import { connect } from 'react-redux';

const initialState = { error: '' };

export const actions = {
  ...createActions('WRONG_CREDENTIALS'),
  signInForm: createFormAction('SIGN_IN_FORM'),
};

// Reducers
export default handleActions({
  [actions.wrongCredentials]: (state, { payload }) => merge(state, payload),
}, initialState);

// Selectors
const mapStateToProps = () => createSelector(
  (state) => state.loginScreen,
  (substate) => substate || {}
);

// Dispatcher
const mapDispatchToProps = {};

export const connectComponent = (Component) => compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Component);
