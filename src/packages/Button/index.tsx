import MatButton, { ButtonProps } from '@material-ui/core/Button';
import React from 'react';

const Button = ({ children, ...props }: ButtonProps) => {
  return <MatButton {...props}>{children}</MatButton>;
};

export type IButtonProps = ButtonProps;
export default Button;
