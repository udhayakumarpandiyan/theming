import styled from 'styled-components';
import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';
import Button, { IButtonProps } from '../Button';

const StyledLink = styled(Button)`
  padding: 0;
  min-width: unset;
  text-transform: unset;
  vertical-align: unset;
  color: #5288ef;
  &:hover {
    text-decoration: underline;
    background: transparent;
  }
  &.Mui-disabled {
    color: #cbd0d3;
    &:hover {
      color: #cbd0d3;
    }
  }
  -webkit-user-select: all;
  -moz-user-select: all;
  -ms-user-select: all;
  user-select: all;
`;

const Link = (props: IButtonProps) => {
  return (
    <StylesProvider injectFirst>
      <StyledLink href={props.href || '#'} {...props}>
        {props.children}
      </StyledLink>
    </StylesProvider>
  );
};

export default Link;
