import React from 'react';
import styled from 'styled-components';

interface LoaderProps {
  loaderSize?: number;
  loaderColor?: string;
}

const DotsLoaderContainer = styled('div')`
  @-webkit-keyframes dot-keyframes {
    0% {
      opacity: 0.4;
      transform: scale(1, 1);
    }
    50% {
      opacity: 1;
      transform: scale(1.2, 1.2);
    }
    100% {
      opacity: 0.4;
      transform: scale(1, 1);
    }
  }
  @keyframes dot-keyframes {
    0% {
      opacity: 0.4;
      transform: scale(1, 1);
    }
    50% {
      opacity: 1;
      transform: scale(1.2, 1.2);
    }
    100% {
      opacity: 0.4;
      transform: scale(1, 1);
    }
  }
`;

const LoadingDot =
  styled('div') <
  LoaderProps >
  `
  -webkit-animation: dot-keyframes 1.5s infinite ease-in-out;
  animation: dot-keyframes 1.5s infinite ease-in-out;
  border-radius: ${(props) => `${props.loaderSize}rem`};
  display: inline-block;
  background-color: ${(props) => props.loaderColor};
  width: ${(props) => `${props.loaderSize}rem`};
  height: ${(props) => `${props.loaderSize}rem`};

  &:nth-child(2) {
    -webkit-animation-delay: 0.5s;
            animation-delay: 0.5s;
  }
  &:nth-child(3) {
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
  }
`;

const DotsLoader = ({
  loaderSize = 0.5,
  loaderColor = '#000',
  ...otherProps
}: LoaderProps) => {
  return (
    <DotsLoaderContainer>
      <LoadingDot
        loaderSize={loaderSize}
        loaderColor={loaderColor}
        {...otherProps}
      />
      <LoadingDot
        loaderSize={loaderSize}
        loaderColor={loaderColor}
        {...otherProps}
      />
      <LoadingDot
        loaderSize={loaderSize}
        loaderColor={loaderColor}
        {...otherProps}
      />
    </DotsLoaderContainer>
  );
};

export default DotsLoader;
