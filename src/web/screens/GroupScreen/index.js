import ListItem from './ListItem';
import pageBuilder from '~/src/common/builders/page';

export default pageBuilder({
  entity: 'group',
  subdomainName: 'groupScreen',
  title: 'Group',
  itemComponent: ListItem,
});
