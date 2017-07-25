import React, { PropTypes } from 'react'
import Snackbar from 'material-ui/Snackbar';

const AppNotification = ({ message, updateMessage }) => (<Snackbar
  open={!!message}
  message={message}
  autoHideDuration={4000}
  onRequestClose={() => updateMessage('')}
/>)

AppNotification.propTypes = {
  message: PropTypes.string,
  updateMessage: PropTypes.func,
}

export default AppNotification
