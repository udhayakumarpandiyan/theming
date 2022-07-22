import MatInputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import React from 'react';

const InputLabel = (props: InputLabelProps) => {
  return <MatInputLabel {...props}> {props.children} </MatInputLabel>;
};

export default InputLabel;
