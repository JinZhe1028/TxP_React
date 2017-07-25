import moment from 'moment';
import ExpandableItem from './ExpandableItem';
import pageBuilder from '~/src/common/builders/page';
import { pathOr, merge } from 'ramda'
import crudStoreApi from '~/src/common/utils/crudStoreApi';

export default pageBuilder({
  entity: 'salesRepDaily',
  subdomainName: 'salesRepDailyNavScreen',
  title: 'Sales Rep',
  itemComponent: ExpandableItem,
  listInitialState: (user) => ({
    filter: {
      period: moment().startOf('day').format(APP_CONFIG.DATE_FORMAT),
      wholesalerId: user.wholesalerId,
    },
  }),
  newInitialState: (user) => {
    const teamLeadId = user.role === 'teamLead' ? user.id : undefined

    return {
      wholesalerId: user.wholesalerId,
      teamLeadId
    }
  },
  filterInitialState: (user) => ({
    wholesalerId: user.wholesalerId,
  }),
  editInitialState: () => ({}),
  sortInitialState: () => ({}),
  filterBar: (filters, { models }) => Object.keys(filters).reduce((acc, key) => {
    switch (key) {
      case 'wholesalerId':
        return merge(acc, { [key]: pathOr(filters[key], ['name'], crudStoreApi('wholesaler').statuses.fetchOne(models, filters[key])) });
      default:
        return merge(acc, { [key]: filters[key] });
    }
  }, {}),
});
