import React from 'react';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MatAccordion, { AccordionProps } from '@material-ui/core/Accordion';
import MatAccordionDetails, {
  AccordionDetailsProps,
} from '@material-ui/core/AccordionDetails';
import MatAccordionSummary, {
  AccordionSummaryProps,
} from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = ({
  expanded,
  onChange,
  children,
  ...props
}: AccordionProps) => (
  <MatAccordion expanded={expanded} onChange={onChange} {...props}>
    {children}
  </MatAccordion>
);

interface AccAccordionSummaryProps {
  'aria-controls': string;
}

/**
 * Making aria-controls as mandatory prop to AccordionSummary
 */
export const AccordionSummary = ({
  children,
  expandIcon,
  ...props
}: Omit<AccordionSummaryProps, 'aria-controls'> & AccAccordionSummaryProps) => (
  <MatAccordionSummary
    {...props}
    expandIcon={expandIcon || <ExpandMoreIcon />}
    aria-controls={props['aria-controls']}
  >
    {children}
  </MatAccordionSummary>
);

interface AccAccordionDetailsProps {
  id: string;
}

export const AccordionDetails = ({
  children,
  role,
  ...props
}: Omit<AccordionDetailsProps, 'id'> & AccAccordionDetailsProps) => (
  <MatAccordionDetails role={role || 'region'} {...props}>
    {children}
  </MatAccordionDetails>
);

export default Accordion;
