import React from 'react';
import MatCardMedia, { CardMediaProps } from '@material-ui/core/CardMedia';

const CardMedia = (props: CardMediaProps) => {
  return <MatCardMedia {...props}>{props.children}</MatCardMedia>;
};

export default CardMedia;
