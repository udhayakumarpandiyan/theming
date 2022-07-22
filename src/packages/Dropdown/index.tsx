import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Autocomplete, { AutocompleteProps } from '@material-ui/lab/Autocomplete';

interface SquareConfig {
  id?: string;
  getOptionLabel?: Function;
  closeIcon?: Node;
  onCustomChange?: (item: any, value: any, reason: any) => void;
  renderInput: Function;
  onClose?: Function;
  options?: object;
  multiple?: Boolean;
  loading?: Boolean;
  disableClearable?: true | false;
  freeSolo?: Boolean;
  outlined?: 'standard' | 'filled' | 'outlined' | undefined; // values='outlined' || 'filled' || 'standard'
  onInputChange?: Function;
  defaultValue?: any;
}

const Combobox = (
  props: SquareConfig &
    AutocompleteProps<
      string | object,
      true | false,
      true | false,
      true | false
    > &
    TextFieldProps
) => {
  return (
    <Autocomplete
      {...props}
      getOptionLabel={(option: any) => option.title}
      onChange={(item, value, reason) =>
        props.onCustomChange
          ? props.onCustomChange(item, value, reason)
          : () => {}
      }
      onClose={(event, reason) =>
        props.onClose ? props.onClose(event, reason) : () => {}
      }
      onInputChange={(i, value, reason) =>
        props.onInputChange ? props.onInputChange(i, value, reason) : () => {}
      }
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label={props.placeholder}
            variant={props.outlined}
            margin="normal"
          />
        );
      }}
    />
  );
};

export default Combobox;
