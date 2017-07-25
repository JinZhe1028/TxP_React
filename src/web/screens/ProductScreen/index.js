import ListItem from './ListItem';
import pageBuilder from '~/src/common/builders/page';

export default pageBuilder({
  entity: 'product',
  subdomainName: 'productScreen',
  title: 'Product',
  itemComponent: ListItem,
});
