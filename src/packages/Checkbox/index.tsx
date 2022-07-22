import React from 'react';
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import MatCheckbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControlLabel from '../FormControlLabel';

export const Checkbox = (props: CheckboxProps) => {
  return <MatCheckbox {...props} />;
};

const CheckboxWithLabel = ({
  label,
  ...props
}: FormControlLabelProps & CheckboxProps) => {
  return <FormControlLabel control={<Checkbox {...props} />} label={label} />;
};

export default CheckboxWithLabel;
