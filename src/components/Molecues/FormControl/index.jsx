import React from 'react';
import { PropTypes } from 'prop-types';
import { StyledLabel, StyledInput } from './index.styled';

const FormControl = ({ label, id, value, onChange, name }) => {
  return (
    <div>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput id={id} value={value} name={name} onChange={onChange} />
    </div>
  );
};

FormControl.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormControl;
