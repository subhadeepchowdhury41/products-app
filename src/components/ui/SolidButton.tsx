import {Button} from 'react-native-paper';
import React from 'react';
import {AppButtonProps} from '../../types/button.t';

const SolidButton = (props: AppButtonProps) => {
  return (
    <Button {...props} mode="contained" style={{}}>
      {props.label}
    </Button>
  );
};

export default SolidButton;
