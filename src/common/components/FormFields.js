import React, { PropTypes } from 'react';
import { pathOr, merge, is } from 'ramda';
import { Field } from 'redux-form';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-downward';
import ArrowUp from 'material-ui/svg-icons/navigation/arrow-upward';
import Clear from 'material-ui/svg-icons/content/clear';
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle,
} from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton } from 'material-ui/RadioButton';
import moment from 'moment';

const styleHidden = {
  display: 'none',
};

const sortValues = [
  {
    value: 'asc',
    icon: <ArrowDown />,
  },
  {
    value: 'desc',
    icon: <ArrowUp />,
  },
  {
    value: 'none',
    icon: <Clear />,
  },
];

const styleRadioButton = {
  display: 'inline-block',
  width: 60,
};

const styleContainerRadio = {
  display: 'flex',
  justifyContent: 'space-between',
};

const styleRadioButtonGroup = {
  display: 'inline-block',
};

const hiddenStyle = {
  display: 'none',
}

const FieldType = ({
  title, field, type, condition, options, format, selectFieldOptions, user, formValues, disabled,
}) => {
  const selectOptions = (options && options.path && selectFieldOptions.data) || pathOr([], ['content'], options);
  const valueFormat = format && format === 'number' ? Number : String;
  const selectValue = (item) => (options.field ? valueFormat(item[options.field]) : item.field);
  const selectTitle = (item) => (options.title ? item[options.title] : item.title);

  if (condition && (is(Function, condition) ? !condition(formValues, user) : !condition)) {
    return (<div></div>);
  }

  switch (type) {
    case 'select':
      return (<Field
        name={field}
        component={SelectField}
        hintText={title}
        fullWidth
        floatingLabelText={title}
        disabled={!!disabled}
        iconStyle={disabled ? styleHidden : {}}
      >
        {
          selectOptions.filter((item) => !item.condition || item.condition(formValues, user)).map((item) =>
            <MenuItem
              key={`${selectValue(item)}-${field}`}
              value={selectValue(item)}
              primaryText={selectTitle(item)}
            />
          )
        }
      </Field>);
    case 'number':
      return (<Field
        name={field}
        component={TextField}
        hintText={title}
        fullWidth
        floatingLabelText={title}
        type={'number'}
      />);
    case 'date':
      return (<Field
        name={field}
        component={DatePicker}
        hintText={title}
        fullWidth
        floatingLabelText={title}
        parse={(a) => a && moment(a).format(APP_CONFIG.DATE_FORMAT)}
        format={(a) => a && moment(a, APP_CONFIG.DATE_FORMAT).toDate()}
      />);
    case 'static':
      return (<Field
        name={field}
        component={TextField}
        hintText={title}
        fullWidth
        disabled
        floatingLabelText={title}
      />);
    case 'hidden':
      return (<Field
        name={field}
        component={TextField}
        hintText={title}
        fullWidth
        disabled
        style={hiddenStyle}
      />);
    case 'radio':
      return (
        <div style={styleContainerRadio}>
          <span>{title}</span>
          <Field
            style={styleRadioButtonGroup}
            name={field}
            component={RadioButtonGroup}
            fullWidth
            floatingLabelText={title}
            disabled={!!disabled}
            iconStyle={disabled ? styleHidden : {}}
          >
            {sortValues.map(
              (item) => <RadioButton
                style={styleRadioButton}
                key={`${field}-${item.value}`}
                value={item.value}
                checkedIcon={item.icon}
                uncheckedIcon={item.icon}
              />
            )}
          </Field>
        </div>
      );
    case 'text':
    default:
      return (<Field
        name={field}
        component={TextField}
        hintText={title}
        fullWidth
        floatingLabelText={title}
      />);
  }
};

FieldType.propTypes = {
  title: PropTypes.string,
  field: PropTypes.string,
  type: PropTypes.string,
  condition: PropTypes.any,
  options: PropTypes.any,
  format: PropTypes.string,
  selectFieldOptions: PropTypes.any,
  user: PropTypes.object,
  formValues: PropTypes.object,
  disabled: PropTypes.bool,
};

const FormFields = ({ fields, selectFieldStatuses, user, formValues }) => (
  <div>
    {
      fields.map((item) => (
        <FieldType
          key={item.field}
          selectFieldOptions={selectFieldStatuses[`${item.field}Status`]}
          formValues={formValues}
          user={user}
          {...item}
        />
      ))
    }
  </div>
);

FormFields.propTypes = {
  fields: PropTypes.array,
  user: PropTypes.object,
  formValues: PropTypes.object,
  selectFieldStatuses: PropTypes.object,
};

export default FormFields;
