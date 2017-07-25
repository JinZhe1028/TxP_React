import listBuilder from '~/src/common/builders/list';
import newFormBuilder from '~/src/common/builders/form/new';
import editFormBuilder from '~/src/common/builders/form/edit';
import filterFormBuilder from '~/src/common/builders/form/filter';
import sortFormBuilder from '~/src/common/builders/form/sort';

export default ({
  entity, subdomainName, title, itemComponent,
  listInitialState = () => ({}),
  newInitialState = () => ({}),
  editInitialState = () => ({}),
  sortInitialState = () => ({}),
  filterInitialState = () => ({}),
  filterBar = (filters) => filters,
  sortBar = (sort) => sort,
}) => {
  const listInner = listBuilder({
    entity,
    subdomainName,
    title,
    itemComponent,
    initialState: listInitialState,
    filterBar,
    sortBar,
  });

  const FilterForm = filterFormBuilder({
    entity,
    subdomainName,
    actions: listInner.actions,
    initialState: filterInitialState,
    ...require(`../formFields/${subdomainName}/filter`).default,
  });

  const EditForm = editFormBuilder({
    entity,
    subdomainName,
    actions: listInner.actions,
    initialState: editInitialState,
    ...require(`../formFields/${subdomainName}/edit`).default,
  });

  const NewForm = newFormBuilder({
    entity,
    subdomainName,
    actions: listInner.actions,
    initialState: newInitialState,
    ...require(`../formFields/${subdomainName}/new`).default,
  });

  const SortForm = sortFormBuilder({
    entity,
    subdomainName,
    actions: listInner.actions,
    initialState: sortInitialState,
    ...require(`../formFields/${subdomainName}/sort`).default,
  });

  const List = listInner.connectComponent({
    newFormComponent: NewForm,
    editFormComponent: EditForm,
    filterFormComponent: FilterForm,
    sortFormComponent: SortForm,
  })

  return {
    list: List,
    new: NewForm,
    edit: EditForm,
    filter: FilterForm,
    sort: SortForm,
  };
};
