import ListItem from './ListItem';
import pageBuilder from '~/src/common/builders/page';

export default pageBuilder({
  entity: 'groupMonthly',
  subdomainName: 'groupMonthlyScreen',
  title: 'Group Monthly',
  itemComponent: ListItem,
});
