import ListItem from './ListItem';
import pageBuilder from '~/src/common/builders/page';

export default pageBuilder({
  entity: 'wholesaler',
  subdomainName: 'wholesalerScreen',
  title: 'Wholesalers',
  itemComponent: ListItem,
});
