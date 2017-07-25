import React, { PropTypes } from 'react';
import { pathOr } from 'ramda';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import { SelectField } from 'redux-form-material-ui';
import { Field } from 'redux-form';
import { actions } from '~/src/common/redux/ImportsScreen';
import { camelize } from 'inflection';
import Layout from '~/src/web/components/Layout';
import moment from 'moment';
import InsertDriveFile from 'material-ui/svg-icons/editor/insert-drive-file';

const styles = {
  attached: {
    textAlign: 'center',
    marginBottom: 20,
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  importFormStyle: {
    padding: '84px 16px 56px',
  },
  styleDisplayNone: {
    display: 'none',
  },
};

const FileInput = (props) => {
  const onFileInputChange = (e) => {
    const { input: { onChange } } = props;
    onChange(e.target.files[0]);
  };

  return (<input
    style={styles.uploadInput}
    type="file"
    onChange={onFileInputChange}
  />);
};

const getItems = (inputParam, selectFieldStatuses) =>
  pathOr([], [`${inputParam.field}Status`, 'data'], selectFieldStatuses).map(
    (model) => <MenuItem
      key={`${inputParam.field}-${model[inputParam.value]}`}
      value={model[inputParam.value]}
      primaryText={model[inputParam.itemTitle]}
    />
  );

const selects = [
  {
    field: 'wholesalerId',
    fieldTitle: 'Wholesaler',
    itemTitle: 'name',
    value: 'id',
    rule: (importType) => !['buyer', 'salesRepBuyerDaily'].includes(importType),
  },
  {
    field: 'groupId',
    fieldTitle: 'Group',
    itemTitle: 'id',
    value: 'id',
    rule: (importType) => ['salesRep'].includes(importType),
  },
  {
    field: 'teamLeadId',
    fieldTitle: 'Team Lead',
    itemTitle: 'name',
    value: 'id',
    rule: (importType) => ['salesRep'].includes(importType),
  },
];

const getSelects = (currentImportType, selectFieldStatuses) => selects.map(
  (select) => (select.rule(currentImportType)
    ? <Field
      key={select.field}
      name={select.field}
      component={SelectField}
      hintText={select.fieldTitle}
      fullWidth
    >
      {
        getItems(select, selectFieldStatuses)
      }
    </Field>
    : <div key={select.field}></div>));

const period = {
  title: 'Period',
  field: 'period',
  options: moment.months().map((month) => ({
    value: moment().month(month).startOf('month').format(APP_CONFIG.DATE_FORMAT),
    title: month,
  })),
  rule: (importType) => ['productMonthly', 'salesRepMonthly'].includes(importType),
};

const getPeriodComponent = (currentImportType) => (period.rule(currentImportType)
  ? <Field
    name={period.field}
    component={SelectField}
    hintText={period.title}
    fullWidth
    floatingLabelText={period.title}
  >
    {
      period.options.map((item) =>
        <MenuItem
          key={`${item.value}-${period.field}`}
          value={item.value}
          primaryText={item.title}
        />
      )
    }
  </Field>
  : <div key={period.field}></div>);

const importTypeMenuItems = [
  'Buyer', 'Product', 'Product Monthly', 'Sales Rep', 'Sales Rep Buyer Daily', 'Sales Rep Monthly', 'User',
];

const ImportsForm = ({
  push, handleSubmit, submitting, location, toggleDrawer, drawerOpen, user, signOut,
  currentImportType, selectFieldStatuses, attachedFileName, children, message, updateMessage,
}) => (
  <Layout
    title={'Imports'}
    location={location}
    push={push}
    toggleDrawer={toggleDrawer}
    drawerOpen={drawerOpen}
    user={user}
    signOut={signOut}
    message={message}
    updateMessage={updateMessage}
  >
    { children }
    <form onSubmit={handleSubmit(actions.importForm)} style={styles.importFormStyle}>
      <div>
        <Field name="importType" component={SelectField} hintText="Import Type" fullWidth>
          {importTypeMenuItems.map(
            (importType) => <MenuItem key={importType} value={camelize(importType.replace(/ /g, ''), true)} primaryText={importType} />
          )}
        </Field>
        {getSelects(currentImportType, selectFieldStatuses)}
        {getPeriodComponent(currentImportType)}
        <FlatButton
          label="Choose an Import"
          labelPosition="before"
          containerElement="label"
          fullWidth
          primary
        >
          <Field
            name="attached"
            component={FileInput}
            fullWidth
          />
        </FlatButton>
        <div style={attachedFileName ? styles.attached : styles.styleDisplayNone}>
          <InsertDriveFile />{attachedFileName}
        </div>
      </div>
      <RaisedButton type="submit" label="Submit" fullWidth disabled={submitting} />
    </form>
  </Layout>
);

ImportsForm.propTypes = {
  push: PropTypes.func,
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool.isRequired,
  location: PropTypes.object,
  toggleDrawer: PropTypes.func,
  drawerOpen: PropTypes.bool,
  user: PropTypes.object,
  signOut: PropTypes.func,
  currentImportType: PropTypes.string,
  selectFieldStatuses: PropTypes.any,
  attachedFileName: PropTypes.string,
  children: PropTypes.node,
  message: PropTypes.string,
  updateMessage: PropTypes.func,
};

export default ImportsForm;
