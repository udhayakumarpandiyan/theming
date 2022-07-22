import React from 'react';
import MatCollapse, { CollapseProps } from '@material-ui/core/Collapse';

interface AccCollapseProps extends CollapseProps {}

const Collapse = ({ children, ...props }: AccCollapseProps) => {
  return <MatCollapse {...props}>{children}</MatCollapse>;
};

export default Collapse;
