import formBuilder from './index';
import crudStoreApi from '~/src/common/utils/crudStoreApi';

export default ({ entity, subdomainName, fields, condition, actions, initialState }) => {
  const api = crudStoreApi(entity);

  return formBuilder({
    title: 'Filter',
    label: 'Apply',
    modalName: 'filter',
    mainAction: actions.updateFilter,
    secondAction: actions.resetFilter,
    initialValues: (subdomain) => subdomain.filter,
    getStatus: api.statuses.fetch,
    formName: `${entity}/filter`,
    initialState,
    api,
    subdomainName,
    entity,
    fields,
    condition,
  });
};
