import moment from 'moment';
import ExpandableItem from './ExpandableItem';
import pageBuilder from '~/src/common/builders/page';
import { pathOr, merge } from 'ramda'
import crudStoreApi from '~/src/common/utils/crudStoreApi';

export default pageBuilder({
  entity: 'groupMonthly',
  subdomainName: 'groupMonthlyNavScreen',
  title: 'Group',
  itemComponent: ExpandableItem,
  listInitialState: (user) => ({
    filter: {
      period: moment().startOf('month').format(APP_CONFIG.DATE_FORMAT),
      wholesalerId: user.wholesalerId,
    },
  }),
  newInitialState: (user) => ({
    wholesalerId: user.wholesalerId,
  }),
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
