import React from 'react';
import MatCardActions, {
  CardActionsProps,
} from '@material-ui/core/CardActions';

const CardActions = (props: CardActionsProps) => {
  return <MatCardActions {...props}>{props.children}</MatCardActions>;
};

export default CardActions;
