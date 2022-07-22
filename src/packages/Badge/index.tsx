import React from 'react';
import MatBadge, { BadgeProps } from '@material-ui/core/Badge';

const Badge = (props: BadgeProps) => {
  return <MatBadge {...props}>{props.children}</MatBadge>;
};

export default Badge;
