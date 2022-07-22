import React from 'react';
import MatList, { ListProps } from '@material-ui/core/List';

const List = ({ children, role, ...props }: ListProps) => {
  return (
    <MatList role={role || 'list'} {...props}>
      {children}
    </MatList>
  );
};

export default List;
