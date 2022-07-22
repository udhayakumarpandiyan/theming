import React, { ComponentProps } from 'react';
import MatListItem from "@material-ui/core/ListItem";

//      We would have to omit the button prop type and re include it in the component below as the type of button is declared as true | undefined and 
//      that can't be properly typecasted to wrap the ListItem component. This is an issue identified by Material-Ui community.
//      Refernce : https://github.com/mui-org/material-ui/issues/14971
type ListItemPropTypes = Omit<ComponentProps<typeof MatListItem>, "button"> & {button?: boolean}

const ListItem = (props: ListItemPropTypes) => {
    const ariaSelected = (props.selected && { 'aria-selected': props.selected }) || {};
    return (
        <MatListItem role={props.role || 'listitem'} {...props} {...ariaSelected} button={props.button as any}>
            {props.children}
        </MatListItem>
    );
}

export default ListItem;
