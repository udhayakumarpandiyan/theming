import React from 'react';
import styled from 'styled-components';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions, {
  DialogActionsProps,
} from '@material-ui/core/DialogActions';
import DialogContent, {
  DialogContentProps,
} from '@material-ui/core/DialogContent';
import DialogContentText, {
  DialogContentTextProps,
} from '@material-ui/core/DialogContentText';
import DialogTitle, { DialogTitleProps } from '@material-ui/core/DialogTitle';

import IconButton from '@material-ui/core/IconButton';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

const StyledModalHeader = styled(DialogTitle)`
  .header-parent {
    display: flex;
    width: 100%;
  }
  .header-content {
    flex-grow: 1;
  }
  .close-btn {
    align-self: center;
  }
`;

interface AccDialogProps
  extends Omit<DialogProps, 'aria-labelledby' | 'aria-describedby'> {
  'aria-labelledby': string;
  'aria-describedby': string;
}

const Modal = ({ scroll, children, ...props }: AccDialogProps) => {
  return (
    <Dialog scroll={'paper' || scroll} {...props}>
      {children}
    </Dialog>
  );
};

interface ModalHeaderProps extends DialogTitleProps {
  showClose?: boolean;
  onCloseClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ModalHeader = ({
  id,
  ...props
}: Omit<ModalHeaderProps, 'id'> & { id: string }) => {
  return (
    <StyledModalHeader {...props}>
      <span className="header-parent">
        <span id={id} className="header-content">
          {props.children}
        </span>
        {props.showClose ? (
          <IconButton
            className="close-btn"
            aria-label="close"
            size="small"
            onClick={props.onCloseClick}
          >
            <CloseOutlinedIcon fontSize="inherit" />
          </IconButton>
        ) : null}
      </span>
    </StyledModalHeader>
  );
};

export const ModalFooter = (props: DialogActionsProps) => {
  return <DialogActions {...props}>{props.children}</DialogActions>;
};

export const ModalContent = (
  props: Omit<DialogContentProps, 'id'> & { id: string }
) => {
  return (
    <DialogContent dividers={props.dividers || true} {...props}>
      {props.children}
    </DialogContent>
  );
};

export const ModalContentText = (props: DialogContentTextProps) => {
  return <DialogContentText {...props}>{props.children}</DialogContentText>;
};

export default Modal;
