import React from 'react';
import MatToolbar from '@material-ui/core/Toolbar';
import MatAppBar, { AppBarProps } from '@material-ui/core/AppBar';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';

const StyledAppBar = styled(MatAppBar)`
  flex-grow: 1;
`;

const AppBar = ({ position, children, ...props }: AppBarProps) => {
  return (
    <StylesProvider injectFirst>
      <StyledAppBar position={position || 'static'} {...props}>
        <MatToolbar>{children}</MatToolbar>
      </StyledAppBar>
    </StylesProvider>
  );
};

export default AppBar;
