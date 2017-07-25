import React, { PropTypes } from 'react';

const style = {
  color: 'red',
}

const FormErrors = ({ errors }) => (
  <div style={style}>
    { errors.map((error) => (<div key={error}>{error}</div>)) }
  </div>
);

FormErrors.propTypes = {
  errors: PropTypes.array,
};

export default FormErrors;
