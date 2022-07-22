import MatSnackbar, { SnackbarProps } from '@material-ui/core/Snackbar';
import React from 'react';

const Snackbar = (props: SnackbarProps) => (
  <MatSnackbar
    anchorOrigin={
      props.anchorOrigin || {
        vertical: 'top',
        horizontal: 'right',
      }
    }
    {...props}
  >
    {props.children}
  </MatSnackbar>
);

export default Snackbar;
