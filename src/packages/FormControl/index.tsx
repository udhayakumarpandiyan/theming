import MatFormControl, {
  FormControlProps,
} from '@material-ui/core/FormControl';
import React from 'react';

const FormControl = (props: FormControlProps) => {
  return <MatFormControl {...props}> {props.children} </MatFormControl>;
};

export default FormControl;
