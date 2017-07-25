import formBuilder from './index';
import crudStoreApi from '~/src/common/utils/crudStoreApi';
import { compose, split, fromPairs, map } from 'ramda';

const sortToFormState = compose(fromPairs, map(split(' ')));

export default ({ entity, subdomainName, fields, condition, actions, initialState }) => {
  const api = crudStoreApi(entity);

  return formBuilder({
    title: 'Sort',
    label: 'Apply',
    modalName: 'sort',
    mainAction: actions.updateSort,
    secondAction: actions.resetSort,
    initialValues: (subdomain) => sortToFormState(subdomain.sort),
    getStatus: api.statuses.fetch,
    formName: `${entity}/sort`,
    initialState,
    api,
    subdomainName,
    entity,
    fields,
    condition,
  });
};
