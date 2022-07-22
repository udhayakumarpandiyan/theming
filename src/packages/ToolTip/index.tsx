import MatTooltip, { TooltipProps } from '@material-ui/core/Tooltip';
import React from 'react';

/**
 * Introducing span and wrapping the children is because, tooltip attaches events to the inner element.
 * Please read accepted answer for clarification: https://stackoverflow.com/questions/48930334/mui-next-tooltip-does-not-show-on-hover
 */

const ToolTip = (props: TooltipProps) => {
  return (
    <MatTooltip placement={props.placement} {...props}>
      <span>{props.children}</span>
    </MatTooltip>
  );
};

export default ToolTip;
