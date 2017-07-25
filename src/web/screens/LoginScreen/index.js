import React, { PropTypes } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import { connectComponent } from '~/src/common/redux/LoginScreen';

const styles = {
  loginPage: {
    textAlign: 'center',
    padding: '0 16px',
    marginTop: '50px',
  },
  error: {
    color: 'red',
  },
  title: {
    fontSize: '30px',
  },
}

const LoginScreen = ({ error }) => (
  <div style={styles.loginPage}>
    <p style={styles.title}>VxP</p>
    <p style={styles.error}>{error}</p>
    <LoginForm />
  </div>
);

LoginScreen.propTypes = {
  error: PropTypes.string,
};

export default connectComponent(LoginScreen);
