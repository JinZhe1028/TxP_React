import { connect } from 'react-redux';
import { merge, pathOr, compose, toUpper, toPairs, map, filter as filterR, head } from 'ramda';
import { push } from 'react-router-redux';
import { createActions, handleActions } from 'redux-actions';
import { componentWillReceiveProps, componentWillMount, componentWillUnmount } from 'react-lifecycle-decorators';
import { createSelector } from 'reselect';
import { capitalize } from 'inflection';
import component from './component';
import { compact } from '~/src/common/utils/redux';
import { actions as appActions } from '~/src/common/redux/App';
import loadContent from '~/src/common/hocs/loadContent';
import crudStoreApi from '~/src/common/utils/crudStoreApi';
import userIsAuthenticated from '~/src/common/hocs/userIsAuthenticated';

export default ({
  entity, subdomainName, title, itemComponent, initialState = () => ({}), filterBar, sortBar,
}) => {
  // State
  const defaultState = merge({
    filter: {},
    new: {},
    edit: {},
    page: { skip: 0, limit: 99 },
    sort: [],
  }, compact(initialState(pathOr({}, ['app', 'user'], JSON.parse(localStorage.redux || '{}')))));

  const api = crudStoreApi(entity);
  // Reducer Actions
  const subdomainActions = createActions(
    `UPDATE_${toUpper(subdomainName)}_FILTER`,
    `UPDATE_${toUpper(subdomainName)}_SORT`,
    `CHANGE_${toUpper(subdomainName)}_OFFSET`,
    `RESET_${toUpper(subdomainName)}_FILTER`,
    `RESET_${toUpper(subdomainName)}_SORT`,
  );

  const actions = {
    changeOffset: subdomainActions[`change${capitalize(subdomainName)}Offset`],
    updateFilter: subdomainActions[`update${capitalize(subdomainName)}Filter`],
    updateSort: subdomainActions[`update${capitalize(subdomainName)}Sort`],
    resetFilter: subdomainActions[`reset${capitalize(subdomainName)}Filter`],
    resetSort: subdomainActions[`reset${capitalize(subdomainName)}Sort`],
  };
  const toSortArray = compose(map((pair) => `${pair[0]} ${pair[1]}`), filterR((pair) => pair[1] !== 'none'), toPairs);
  // Reducers
  const reducer = handleActions({
    [actions.updateFilter]: (state, { payload }) => merge(state, { filter: payload, page: defaultState.page }),
    [actions.updateSort]: (state, { payload }) => merge(state, { sort: toSortArray(payload), page: defaultState.page }),
    [actions.resetFilter]: (state) => merge(state, { filter: defaultState.filter, page: defaultState.page }),
    [actions.resetSort]: (state) => merge(state, { sort: defaultState.sort, page: defaultState.page }),
    [actions.changeOffset]: (state, { payload }) => merge(state, { page: payload }),
  }, defaultState);

  // Selectors
  const mapStateToProps = createSelector(
    (state) => state.app,
    (state) => state[subdomainName],
    (state) => state.models,
    (app, subdomain, models) => {
      const { page, sort } = subdomain;
      const filter = compact(subdomain.filter)
      const model = api.statuses.fetch(models, compact({ where: filter, limit: page.limit, skip: page.skip, sort }));
      const { data, isLoading, otherInfo } = model;
      const count = pathOr(0, ['meta', 'count'], otherInfo);
      const user = app.user;
      const drawerOpen = app.drawer;
      const message = app.message;

      return {
        model,
        models,
        filter,
        isLoading,
        data,
        otherInfo,
        count,
        page,
        user,
        drawerOpen,
        sort,
        message,
      };
    }
  );

  // Dispatcher
  const mapDispatchToProps = (dispatch) => ({
    push: (path) => dispatch(push(path)),
    fetch: ({ needsFetch }, { filter, page, sort }) =>
      needsFetch && dispatch(api.actions.fetch(compact({ where: filter, limit: page.limit, skip: page.skip, sort }))),
    toggleModal: (data) => dispatch(appActions.toggleModal(data)),
    changeOffset: (data) => dispatch(actions.changeOffset(data)),
    clearData: () => dispatch(api.clearance.fetch()),
    toggleDrawer: () => dispatch(appActions.toggleDrawer()),
    signOut: () => dispatch(appActions.signOut()),
    updateMessage: (data) => dispatch(appActions.updateMessage(data)),
  });

  const connectComponent = (Component) => compose(
    userIsAuthenticated(),
    connect(mapStateToProps, mapDispatchToProps),
    componentWillMount(({ model, fetch, filter, page, sort }) => fetch(model, { filter, page, sort })),
    componentWillReceiveProps(({ model, fetch, filter, page, sort }) => fetch(model, { filter, page, sort })),
    componentWillUnmount(({ clearData }) => clearData()),
    loadContent(),
  )(Component);

  return {
    actions,
    reducer,
    connectComponent: ({ newFormComponent, editFormComponent, filterFormComponent, sortFormComponent }) => ({
      actions,
      reducer,
      connectedComponent: connectComponent(
        component({
          title, subdomainName, itemComponent, newFormComponent, editFormComponent, filterFormComponent,
          sortFormComponent, filterBar, sortBar, api,
        })
      ),
    }),
  }
};
