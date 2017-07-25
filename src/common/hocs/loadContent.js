import React from 'react';
import LoaderComponent from '../components/Loader';
import ErrorComponent from '../components/Error';

const loadContent = () => (Component) => {
  const LoadContent = (props) => (
    <div>
      <Component {...props} >
        { props.isLoading && <LoaderComponent /> }
        { props.error && <ErrorComponent /> }
      </Component>
    </div>
  );

  LoadContent.propTypes = Component.propTypes;

  return LoadContent;
};

export default loadContent;
