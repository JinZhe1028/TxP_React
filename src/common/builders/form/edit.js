import formBuilder from './index';
import crudStoreApi from '~/src/common/utils/crudStoreApi';

export default ({ entity, subdomainName, fields, condition, initialState }) => {
  const api = crudStoreApi(entity);

  return formBuilder({
    title: 'Edit',
    label: 'Update',
    modalName: 'edit',
    mainAction: api.actions.update,
    secondAction: null,
    initialValues: (subdomain, models, id) => api.statuses.fetchOne(models, id),
    getStatus: api.statuses.update,
    formName: `${entity}/edit`,
    initialState,
    api,
    subdomainName,
    entity,
    fields,
    condition,
  });
};
