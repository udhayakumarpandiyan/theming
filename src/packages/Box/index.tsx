import MatBox, { BoxProps } from '@material-ui/core/Box';
import React from 'react';

const Box = (props: BoxProps) => {
  return <MatBox {...props}> {props.children} </MatBox>;
};

export default Box;
