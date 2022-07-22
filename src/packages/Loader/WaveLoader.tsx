import React from 'react';
import styled, { keyframes } from 'styled-components';

const sizeItem: { [key: string]: any } = {
  small: '5px',
  default: '10px',
  large: '12px',
};

const animate = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
`;

interface LoadingContainerProps {
  size?: string;
}
const LoadingContainer =
  styled.div <
  LoadingContainerProps >
  `
  width: ${(props) =>
    props.size === 'small' ? 20 : props.size === 'large' ? 50 : 40}px;
  height: ${(props) =>
    props.size === 'small' ? 20 : props.size === 'large' ? 50 : 40}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: nowrap;
`;

type ItemProps = {
  size?: string,
};
const Item =
  styled.div <
  ItemProps >
  `
  width: ${({ size }) => (size ? sizeItem[size] : sizeItem.default)};
  height: ${({ size }) => (size ? sizeItem[size] : sizeItem.default)};
  border-radius: 50%;
  background: ${(props) => props.color || '#6979F8'};
  animation: ${animate} 0.5s ease-in-out alternate infinite;
`;

const ItemFirst =
  styled(Item) <
  ItemProps >
  `
  animation-delay: -0.25s;
`;

const ItemTwo =
  styled(Item) <
  ItemProps >
  `
  animation-delay:  -0.125s;
`;

type PropTypes = {
  color?: string,
  size?: string,
};
const WaveTopBottomLoading = ({
  color,
  size = 'default',
  ...props
}: PropTypes) => {
  return (
    <LoadingContainer
      size={size}
      tabIndex={-1}
      aria-label={props['aria-label'] || 'loading'}
      aria-live="polite"
    >
      <ItemFirst color={color} size={size} />
      <ItemTwo color={color} size={size} />
      <Item color={color} size={size} />
    </LoadingContainer>
  );
};

export default WaveTopBottomLoading;
