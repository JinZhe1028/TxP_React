import { createSelector } from 'reselect';
import { createFormAction } from 'redux-form-saga';
import { push } from 'react-router-redux';
import { componentWillMount } from 'react-lifecycle-decorators';
import { connect } from 'react-redux';
import { compose, pathOr, merge } from 'ramda';
import { actions as appActions } from '~/src/common/redux/App';
import crudStoreApi from '~/src/common/utils/crudStoreApi';
import { reduxForm } from 'redux-form';
import importForm from '~/src/common/formFields/importScreen/import';
import userIsAuthenticated from '~/src/common/hocs/userIsAuthenticated';
import loadContent from '~/src/common/hocs/loadContent';

export const actions = {
  importForm: createFormAction('IMPORT_FORM'),
};

const remoteFields = importForm.fields.map(({ field, options }) => {
  // create Dispatchers
  const params = options.params || {};
  const fieldApi = crudStoreApi(options.path);

  return {
    status: (models) => fieldApi.statuses.fetch(models, params),
    action: (dispatch) => dispatch(fieldApi.actions.fetch(params)),
    field,
    statusKey: `${field}Status`,
    actionKey: `${field}Action`,
  };
});

const makeSelectors = (models) =>
  remoteFields.reduce((acc, { statusKey, status }) => merge(acc, { [statusKey]: status(models) }), {});

const makeDispatchers = (dispatch) => remoteFields.reduce((acc, { actionKey, action }) =>
  merge(acc, { [actionKey]: ({ needsFetch }) => needsFetch && action(dispatch) }), {});

const makeActionCall = (props) => remoteFields.map(({ actionKey, statusKey }) => props[actionKey](props[statusKey]));

// Reducers
export default {};

// Selectors
const mapStateToProps = createSelector(
  (state) => pathOr(null, ['form', 'imports', 'values', 'importType'], state),
  (state) => pathOr(null, ['form', 'imports', 'values', 'attached', 'name'], state),
  (state) => pathOr(false, ['form', 'imports', 'submitting'], state),
  (state) => state.app,
  (state) => state.models,
  (currentImportType, attachedFileName, submitting, app, models) => {
    const drawerOpen = app.drawer;
    const user = app.user;
    const message = app.message
    const selectFieldStatuses = makeSelectors(models);

    return {
      message,
      drawerOpen,
      user,
      isLoading: submitting,
      currentImportType,
      attachedFileName,
      ...selectFieldStatuses,
      selectFieldStatuses,
    };
  }
);

// Dispatcher
const mapDispatchToProps = (dispatch) => ({
  push: (path) => dispatch(push(path)),
  toggleDrawer: () => dispatch(appActions.toggleDrawer()),
  signOut: () => dispatch(appActions.signOut()),
  updateMessage: (data) => dispatch(appActions.updateMessage(data)),
  ...makeDispatchers(dispatch),
});

export const connectComponent = (Component) => compose(
  userIsAuthenticated(),
  connect(mapStateToProps, mapDispatchToProps),
  componentWillMount((props) => makeActionCall(props)),
  reduxForm({ form: 'imports', enableReinitialize: true }),
  loadContent(),
)(Component);
