import React from 'react';
import MatFormControlLabel, {
  FormControlLabelProps,
} from '@material-ui/core/FormControlLabel';

const FormControlLabel = ({ ...props }: FormControlLabelProps) => {
  return <MatFormControlLabel {...props} />;
};

export default FormControlLabel;
