import React from 'react';
import MatMenu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import MatMenuItem, { MenuItemProps } from '@material-ui/core/MenuItem';
import Typography from '../Typography';

const useStyles = makeStyles({
  list: {
    '&.horizontal ul': {
      display: 'flex',
    },
  },
});

interface MenuProps extends MenuItemProps {
  menuItems: Array<links>;
  menuType?: 'horizontal' | 'vertical';
}

type links = {
  icon?: JSX.Element,
  text: string,
  menukey: string,
};

const initialState = {
  mouseX: null,
  mouseY: null,
  anchorEl: null,
};

interface CustomMenuProps {
  isContextMenu?: boolean;
  onMenuItemClick?: (
    event: React.MouseEvent<HTMLElement>,
    menuKey: string
  ) => void | undefined;
}

const Menu = (props: MenuProps & CustomMenuProps) => {
  const [state, setState] = React.useState<{
    mouseX?: null | number,
    mouseY?: null | number,
    anchorEl?: Element | null,
  }>(initialState);

  const handleClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      anchorEl: event.currentTarget,
    });
  };

  const handleClose = () => {
    setState(initialState);
  };

  const classes = useStyles();

  const cMenuProps = (props.isContextMenu && {
    onContextMenu: handleClick,
    style: { cursor: 'context-menu' },
  }) || {
    onClick: handleClick,
  };

  return (
    <>
      <Typography {...cMenuProps} aria-haspopup="true" role="button">
        {props.children}
      </Typography>
      <MatMenu
        keepMounted
        open={props.isContextMenu ? state.mouseY !== null : !!state.anchorEl}
        getContentAnchorEl={null}
        onClose={handleClose}
        anchorEl={state.anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        className={`${classes.list} ${props.menuType || 'vertical'}`}
        anchorReference={props.isContextMenu ? 'anchorPosition' : 'anchorEl'}
        anchorPosition={{ top: state.mouseY || 0, left: state.mouseX || 0 }}
      >
        {React.Children.toArray(
          props.menuItems.map((linkObj: links) => {
            return (
              <MatMenuItem
                button
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  if (props.onMenuItemClick) {
                    props.onMenuItemClick(event, linkObj.menukey);
                  }
                  handleClose();
                }}
              >
                {linkObj.icon} {linkObj.text}
              </MatMenuItem>
            );
          })
        )}
      </MatMenu>
    </>
  );
};

export default Menu;
