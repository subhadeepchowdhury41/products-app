import {Button} from 'react-native-paper';
import React from 'react';
import {AppButtonProps} from '../../types/button.t';
import {buttonStyles} from '../../utils/consts';

const OutlinedButton = (props: AppButtonProps) => {
  return (
    <Button {...props} mode="outlined" style={buttonStyles}>
      {props.label}
    </Button>
  );
};

export default OutlinedButton;
