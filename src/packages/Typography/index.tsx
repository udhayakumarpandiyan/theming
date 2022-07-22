import MatTypography, { TypographyProps } from '@material-ui/core/Typography';
import React from 'react';

const Typography = (props: TypographyProps) => {
  return <MatTypography {...props}>{props.children}</MatTypography>;
};

export { TypographyProps } from '@material-ui/core/Typography';

export default Typography;
