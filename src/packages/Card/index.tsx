import React from 'react';
import MatCard, { CardProps } from '@material-ui/core/Card';
import CardActions from './CardActions';
import CardContent from './CardContent';
import CardHeader from './CardHeader';
import CardMedia from './CardMedia';

const Card = ({ children, ...props }: CardProps) => {
  return <MatCard {...props}>{children}</MatCard>;
};

export { CardActions, CardContent, CardHeader, CardMedia };
export default Card;
