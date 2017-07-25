import React, { PropTypes } from 'react';
import { compose } from 'ramda';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import { actions } from '~/src/common/redux/LoginScreen';

const required = (value) => (value == null ? 'Required' : undefined)

const LoginForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(actions.signInForm)}>
    <div>
      <Field
        name="email"
        component={TextField}
        hintText="Email"
        floatingLabelText="Email"
        validate={required}
        fullWidth
      />
    </div>
    <div>
      <Field
        name="password"
        type="password"
        component={TextField}
        hintText="Password"
        floatingLabelText="Password"
        validate={required}
        fullWidth
      />
    </div>

    <RaisedButton type="submit" label="Sign In" fullWidth disabled={submitting} />
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default compose(
  reduxForm({ form: 'login/login' }),
)(LoginForm);
