import MatIconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import React from 'react';

const IconButton = (props: IconButtonProps) => {
  return <MatIconButton {...props}> {props.children} </MatIconButton>;
};

export default IconButton;
