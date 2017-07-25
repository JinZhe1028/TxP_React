import React, { PropTypes } from 'react';
import { List } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FilterBar from '~/src/web/components/FilterBar';
import SortBar from '~/src/web/components/SortBar';
import Layout from '~/src/web/components/Layout';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const listStyle = {
  padding: '64px 0px 56px',
};

const pagButtonStyle = {
  width: '50%',
};

const floatingButtonStyle = {
  position: 'fixed',
  bottom: '90px',
  right: '20px',
  zIndex: 1500,
};

const emptyText = {
  textAlign: 'center',
  width: '100%',
  marginTop: '30px',
  lineHeight: '25px',
}

export default ({
  title, itemComponent, newFormComponent, editFormComponent, filterFormComponent, sortFormComponent, filterBar, sortBar,
  api,
}) => {
  const item = { itemComponent }
  const ListScreen = ({
    data, location, push, filter, count, changeOffset, page, toggleModal, updateMessage,
    user, toggleDrawer, drawerOpen, signOut, sort, children, isLoading, message, models,
  }) => {
    const toggleFiltersForm = () => toggleModal({ name: 'filter' });
    const toggleSortForm = () => toggleModal({ name: 'sort' });
    const toggleNewForm = () => toggleModal({ name: 'new' });
    const toggleEditForm = (id) => toggleModal({ name: 'edit', id });
    const loadNext = () => changeOffset({ ...page, offset: page.offset + data.length });
    const loadPrev = () => changeOffset({ ...page, offset: page.offset - data.length });
    const hasNextData = data.length < count;
    const hasPrevData = page.offset > 0;

    const canEdit = editFormComponent && editFormComponent.condition && editFormComponent.condition(user)
    const canNew = newFormComponent && newFormComponent.condition && newFormComponent.condition(user)
    const canFilter = filterFormComponent && filterFormComponent.condition && filterFormComponent.condition(user)
    const canSort = sortFormComponent && sortFormComponent.condition && sortFormComponent.condition(user)

    const filterBarData = filterBar(filter, { api, models })
    const sortBarData = sortBar(sort, { api, models })

    return (
      <Layout
        title={title}
        location={location}
        push={push}
        toggleDrawer={toggleDrawer}
        drawerOpen={drawerOpen}
        filterFormComponent={filterFormComponent}
        toggleFiltersForm={toggleFiltersForm}
        sortFormComponent={sortFormComponent}
        toggleSortForm={toggleSortForm}
        user={user}
        signOut={signOut}
        message={message}
        updateMessage={updateMessage}
      >

        { canFilter && <filterFormComponent.connectedComponent /> }
        { canEdit && <editFormComponent.connectedComponent /> }
        { canNew && <newFormComponent.connectedComponent /> }
        { canSort && <sortFormComponent.connectedComponent /> }

        { children }
        <List style={listStyle}>
          <FilterBar filters={filterBarData} />
          <SortBar sort={sortBarData} />
          <Divider />
          { data.length === 0 && !isLoading &&
            <div style={emptyText}>
              Nothing to display <br /> Please, ask your manager
            </div>
          }
          {data.map((attributes) => (
            <item.itemComponent
              key={attributes.id}
              user={user}
              onTouchTap={() => canEdit && toggleEditForm(attributes.id)}
              {...attributes}
            />
          ))}

          { hasPrevData && <RaisedButton label="Load prev" style={pagButtonStyle} onTouchTap={loadPrev} /> }
          { hasNextData && <RaisedButton label="Load next" style={pagButtonStyle} onTouchTap={loadNext} /> }
          { canNew &&
            <FloatingActionButton style={floatingButtonStyle} onTouchTap={toggleNewForm}>
              <ContentAdd />
            </FloatingActionButton> }
        </List>
      </Layout>
    );
  };

  ListScreen.propTypes = {
    location: PropTypes.object,
    push: PropTypes.func,
    data: PropTypes.array,
    changeOffset: PropTypes.func,
    filter: PropTypes.object,
    count: PropTypes.number,
    page: PropTypes.object,
    toggleModal: PropTypes.func,
    user: PropTypes.object,
    toggleDrawer: PropTypes.func,
    drawerOpen: PropTypes.bool,
    signOut: PropTypes.func,
    sort: PropTypes.array,
    children: PropTypes.node,
    isLoading: PropTypes.bool,
    message: PropTypes.string,
    updateMessage: PropTypes.func,
    models: PropTypes.object,
  };

  return ListScreen;
};
