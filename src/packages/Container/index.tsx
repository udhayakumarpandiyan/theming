import React from 'react';
import MatContainer, { ContainerProps } from '@material-ui/core/Container';

const Container = ({ children, ...props }: ContainerProps) => {
  return <MatContainer {...props}>{children}</MatContainer>;
};

export default Container;
