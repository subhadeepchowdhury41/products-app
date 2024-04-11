import {Button} from 'react-native-paper';
import React from 'react';
import {AppButtonProps} from '../../types/button.t';
import {buttonStyles} from '../../utils/consts';

const SolidButton = (props: AppButtonProps) => {
  return (
    <Button
      {...props}
      mode="contained"
      style={[
        buttonStyles,
        {
          backgroundColor: props.color || '#6750a4',
        },
      ]}>
      {props.label}
    </Button>
  );
};

export default SolidButton;
