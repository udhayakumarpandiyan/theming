import React from 'react';
import MatDrawer, { DrawerProps } from '@material-ui/core/Drawer';
// import Button from '../Button';

const Drawer = (props: DrawerProps) => {
  return <MatDrawer {...props}>{props.children}</MatDrawer>;
};

export default Drawer;
