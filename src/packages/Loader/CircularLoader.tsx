import CircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress';
import React from 'react';
import styled from 'styled-components';

type SpanProps = {
  size: number,
  color: string,
};
const StyledSpan =
  styled('span') <
  SpanProps >
  `
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}rem;
`;

interface ICircularProgressProps extends CircularProgressProps {
  loaderSize?: number;
  loaderColor?: string;
  loadingText?: string;
}

const CircularLoader = ({
  loaderSize = 1,
  loaderColor = '#3F3356',
  loadingText,
  ...otherProps
}: ICircularProgressProps) => {
  return (
    <StyledSpan size={loaderSize} color={loaderColor}>
      <CircularProgress
        color="inherit"
        size={`${1.5 * loaderSize}rem`}
        disableShrink={otherProps.disableShrink || true}
        tabIndex={-1}
        aria-label={otherProps['aria-label'] || 'loading'}
        aria-live="polite"
        {...otherProps}
      />
      &nbsp;{loadingText || ''}
    </StyledSpan>
  );
};

export default CircularLoader;
