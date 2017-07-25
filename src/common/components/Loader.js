import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const styleLoader = {
  position: 'fixed',
  left: '-40px',
  top: '50%',
  marginLeft: '50%',
  marginTop: '-40px',
  zIndex: 1500,
};

const Loader = () => (<CircularProgress style={styleLoader} size={80} thickness={9} />);

export default Loader;
