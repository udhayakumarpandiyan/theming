import React from 'react';
import MatListItemIcon, {
  ListItemIconProps,
} from '@material-ui/core/ListItemIcon';

const ListItemIcon = (props: ListItemIconProps) => {
  return <MatListItemIcon {...props}>{props.children}</MatListItemIcon>;
};

export default ListItemIcon;
