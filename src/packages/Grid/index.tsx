import MatGrid, { GridProps } from '@material-ui/core/Grid';
import React from 'react';

const Grid = (props: GridProps) => {
  return <MatGrid {...props}> {props.children} </MatGrid>;
};

export default Grid;
