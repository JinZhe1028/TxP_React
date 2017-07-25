import moment from 'moment';
import ListItem from './ListItem';
import pageBuilder from '~/src/common/builders/page';

export default pageBuilder({
  entity: 'salesRepProductDaily',
  subdomainName: 'salesRepProductDailyScreen',
  title: 'Sales Rep Product Dailies',
  itemComponent: ListItem,
  initialState: {
    filter: {
      period: moment().startOf('day').format(APP_CONFIG.DATE_FORMAT),
    },
  },
});
