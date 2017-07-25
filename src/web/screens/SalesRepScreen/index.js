import ListItem from './ListItem';
import pageBuilder from '~/src/common/builders/page';

export default pageBuilder({
  entity: 'salesRep',
  subdomainName: 'salesRepScreen',
  title: 'Sales Rep',
  itemComponent: ListItem,
});
