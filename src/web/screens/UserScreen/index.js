import ListItem from './ListItem';
import pageBuilder from '~/src/common/builders/page';

export default pageBuilder({
  entity: 'user',
  subdomainName: 'userScreen',
  title: 'Users',
  itemComponent: ListItem,
});
