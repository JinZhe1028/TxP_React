import moment from 'moment';
import ListItem from './ListItem';
import pageBuilder from '~/src/common/builders/page';

export default pageBuilder({
  entity: 'salesRepMonthly',
  subdomainName: 'salesRepMonthlyScreen',
  title: 'Sales Rep Monthlies',
  itemComponent: ListItem,
  initialState: {
    filter: {
      period: moment().startOf('month').format(APP_CONFIG.DATE_FORMAT),
    },
  },
});
