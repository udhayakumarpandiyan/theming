import React from 'react';
import MatCardContent, {
  CardContentProps,
} from '@material-ui/core/CardContent';

const CardContent = (props: CardContentProps) => {
  return <MatCardContent {...props}>{props.children}</MatCardContent>;
};

export default CardContent;
