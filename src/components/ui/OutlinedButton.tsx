import {Button} from 'react-native-paper';
import React from 'react';
import {AppButtonProps} from '../../types/button.t';

const OutlinedButton = (props: AppButtonProps) => {
  return (
    <Button {...props} mode="outlined" style={{}}>
      {props.label}
    </Button>
  );
};

export default OutlinedButton;
