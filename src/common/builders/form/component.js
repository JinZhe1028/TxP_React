import React, { PropTypes } from 'react';
import Close from 'material-ui/svg-icons/navigation/close';
import Clear from 'material-ui/svg-icons/communication/clear-all';
import ModalForm from '~/src/common/components/ModalForm';
import FormFields from '~/src/common/components/FormFields';
import FormErrors from '~/src/common/components/FormErrors';

export default ({ title, label, fields }) => {
  const Form = ({
    isOpen, closeModal, handleSubmit, mainAction, secondAction, errors, modalName, selectFieldStatuses, user, formValues,
  }) => (
    <ModalForm
      isOpen={isOpen}
      handleSubmit={handleSubmit(mainAction)}
      left={<Close onTouchTap={() => closeModal({ name: modalName })} />}
      right={<Clear onTouchTap={() => secondAction()} />}
      label={label}
      title={title}
    >
      <FormErrors errors={errors} />
      <FormFields fields={fields} user={user} formValues={formValues} selectFieldStatuses={selectFieldStatuses} />
    </ModalForm>
  );

  Form.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    handleSubmit: PropTypes.func,
    mainAction: PropTypes.func,
    secondAction: PropTypes.func,
    errors: PropTypes.array,
    modalName: PropTypes.string,
    selectFieldStatuses: PropTypes.object,
    user: PropTypes.object,
    formValues: PropTypes.object,
  };

  return Form;
};
