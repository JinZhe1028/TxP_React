import ListItem from './ListItem';
import pageBuilder from '~/src/common/builders/page';

export default pageBuilder({
  entity: 'buyer',
  subdomainName: 'buyerScreen',
  title: 'Buyer',
  itemComponent: ListItem,
});
