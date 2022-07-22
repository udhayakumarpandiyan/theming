import MatFormHelperText, {
  FormHelperTextProps,
} from '@material-ui/core/FormHelperText';
import React from 'react';

const FormHelperText = (props: FormHelperTextProps) => {
  return <MatFormHelperText {...props}> {props.children} </MatFormHelperText>;
};

export default FormHelperText;
