import { createSelector } from 'reselect';
import { compose, pathOr, merge, difference, is } from 'ramda';
import { connect } from 'react-redux';
import { createActions, handleActions } from 'redux-actions';
import { componentWillMount, componentWillUnmount } from 'react-lifecycle-decorators';
import { reduxForm, formValueSelector } from 'redux-form';
import component from './component';
import crudStoreApi from '~/src/common/utils/crudStoreApi';
import { actions as appActions } from '~/src/common/redux/App';
import { compact } from '~/src/common/utils/redux';

export default ({
  title, label, subdomainName, modalName, formName, fields, condition, getStatus, initialValues,
  api, mainAction, secondAction, initialState,
}) => {
  // State
  // const initialState = {};

  const remoteFields = fields.filter(({ type, options }) => type === 'select' && options.path).map(({ field, options }) => {
    // create Dispatchers
    const params = options.params || {};
    const fieldApi = crudStoreApi(options.path);

    return {
      status: (models) => fieldApi.statuses.fetch(models, params),
      action: (dispatch) => dispatch(fieldApi.actions.fetch(params)),
      clear: (dispatch) => dispatch(fieldApi.clearance.fetch()),
      params,
      fieldApi,
      field,
      statusKey: `${field}Status`,
      actionKey: `${field}Action`,
      clearKey: `${field}Clear`,
    };
  });

  const makeSelectors = (models) =>
    remoteFields.reduce((acc, { statusKey, status }) =>
      merge(acc, { [statusKey]: status(models) }), {});

  const makeDispatchers = (dispatch) =>
    remoteFields.reduce((acc, { actionKey, clearKey, action, clear }) =>
      merge(acc, {
        [actionKey]: ({ needsFetch }) => needsFetch && action(dispatch),
        [clearKey]: () => clear(dispatch),
      }), {});

  const makeActionCall = (props) =>
    remoteFields.map(({ actionKey, statusKey }) => props[actionKey](props[statusKey]));

  const clearRemoteFields = (props) =>
    remoteFields.map(({ clearKey }) => props[clearKey]());

  const makeErrors = (status) => {
    const errors = status.error || []

    return is(Array, errors) ? errors : [JSON.stringify(errors)]
  }

  // Reducer Actions
  // const subdomainActions = createActions();

  const actions = {};

  // Reducers
  const reducer = handleActions({
    default: (state, { payload }) => state,
  }, {});

  const mapStateToProps = createSelector(
    (state) => state.app,
    (state) => state[subdomainName],
    (state) => state.models,
    (state) => formValueSelector(formName)(state, ...fields.map(({ field }) => field)),
    (app, subdomain, models, formValues) => {
      const id = app.modal.id;
      const isOpen = app.modal.name === modalName;
      const status = getStatus(models);
      const errors = makeErrors(status);
      const selectFieldStatuses = makeSelectors(models);
      const user = app.user;
      const initValues = merge(
        compact(initialState(pathOr({}, ['app', 'user'], JSON.parse(localStorage.redux || '{}')))),
        initialValues(subdomain, models, id)
      )

      return {
        initialValues: initValues,
        formValues,
        isOpen,
        status,
        errors,
        id,
        modalName,
        user,
        ...selectFieldStatuses,
        selectFieldStatuses,
      };
    }
  );

  // Dispatcher
  const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch(appActions.closeModal()),
    mainAction: (data) => dispatch(mainAction(data)),
    secondAction: (data) => dispatch(secondAction(data)),
    ...makeDispatchers(dispatch),
  });

  const connectComponent = (Component) => compose(
    connect(mapStateToProps, mapDispatchToProps),
    componentWillMount((props) => makeActionCall(props)),
    componentWillUnmount((props) => clearRemoteFields(props)),
    reduxForm({ form: formName, enableReinitialize: true })
  )(Component);

  const connectedComponent = connectComponent(
    component({ title, label, fields })
  );

  return {
    actions,
    reducer,
    connectedComponent,
    condition,
    formName,
  };
};
