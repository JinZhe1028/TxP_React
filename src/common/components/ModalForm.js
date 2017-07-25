import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

const contentStyle = {
  width: '100%',
  maxWidth: 'none',
  height: '100%',
};

const bodyStyle = {
  padding: '0 16px 16px',
  height: '100vh',
};

const style = {
  paddingTop: 0,
  height: '100vh',
};

const titleStyle = {
  padding: '0 24px',
};

const Bottom = ({ action, label }) => (
  <RaisedButton label={label} primary fullWidth onTouchTap={action} />
);

Bottom.propTypes = {
  action: PropTypes.func,
  label: PropTypes.string,
};

const Top = ({ left, right, title }) => (
  <AppBar
    title={title}
    style={titleStyle}
    iconElementLeft={<IconButton>{left}</IconButton>}
    iconElementRight={<IconButton>{right}</IconButton>}
  />
);

Top.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  title: PropTypes.string,
};

const ModalForm = ({
  isOpen, close, children, handleSubmit, left, right, label, title,
}) => (
  <Dialog
    title={<Top left={left} right={right} title={title} />}
    actions={<Bottom label={label} action={handleSubmit} />}
    modal={false}
    open={isOpen}
    onRequestClose={close}
    contentStyle={contentStyle}
    bodyStyle={bodyStyle}
    contentClassName="contentClassName"
    bodyClassName="bodyClassName"
    overlayClassName="overlayClassName"
    className="className"
    style={style}
    autoScrollBodyContent
    repositionOnUpdate={false}
    autoDetectWindowHeight={false}
  >
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  </Dialog>
);

ModalForm.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  children: PropTypes.node,
  handleSubmit: PropTypes.func,
  left: PropTypes.node,
  right: PropTypes.node,
  title: PropTypes.string,
  label: PropTypes.string,
};

// Should be connected with redux-form and redux
export default ModalForm;
