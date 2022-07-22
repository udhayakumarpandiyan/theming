import React from 'react';
import MatListItemText, {
  ListItemTextProps,
} from '@material-ui/core/ListItemText';

const ListItemText = (props: ListItemTextProps) => {
  return <MatListItemText {...props}>{props.children}</MatListItemText>;
};

export default ListItemText;
