import React from 'react';
import MatCardHeader, { CardHeaderProps } from '@material-ui/core/CardHeader';

const CardHeader = (props: CardHeaderProps) => {
  return <MatCardHeader {...props}>{props.children}</MatCardHeader>;
};

export default CardHeader;
