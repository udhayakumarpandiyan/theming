import React from 'react';
import MatAvatar, { AvatarProps } from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

interface AccAvatarProps extends Omit<AvatarProps, 'alt'> {
  alt: string;
}

export const Avatar = (props: AccAvatarProps) => {
  return <MatAvatar {...props} />;
};

const ImageAvatars = ({ groupAvatar, children, max, ...props }: any) => {
  return !groupAvatar ? (
    <div role="img" {...props}>
      {children}
    </div>
  ) : (
    <AvatarGroup max={max}>{children}</AvatarGroup>
  );
};

export default ImageAvatars;
