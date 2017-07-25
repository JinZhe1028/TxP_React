import moment from 'moment';
import ListItem from './ListItem';
import pageBuilder from '~/src/common/builders/page';

export default pageBuilder({
  entity: 'productMonthly',
  subdomainName: 'productMonthlyScreen',
  title: 'Product Monthly',
  itemComponent: ListItem,
  initialState: {
    filter: {
      period: moment().startOf('month').format(APP_CONFIG.DATE_FORMAT),
    },
  },
});
