import formBuilder from './index';
import crudStoreApi from '~/src/common/utils/crudStoreApi';

export default ({ entity, subdomainName, fields, condition, initialState }) => {
  const api = crudStoreApi(entity);

  return formBuilder({
    title: 'New',
    label: 'Create',
    modalName: 'new',
    mainAction: api.actions.create,
    secondAction: null,
    initialValues: (subdomain) => subdomain.new,
    getStatus: api.statuses.create,
    formName: `${entity}/new`,
    initialState,
    api,
    subdomainName,
    entity,
    fields,
    condition,
  });
};
