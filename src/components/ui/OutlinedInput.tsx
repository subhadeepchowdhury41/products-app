import {HelperText, TextInput} from 'react-native-paper';
import {InputProps} from '../../types/input.t';
import React from 'react';
import {View} from 'react-native';

const OutlinedInput = (props: InputProps) => {
  return (
    <View>
      <TextInput {...props} mode="outlined" style={{}} />
      <HelperText
        type="error"
        visible={props.errorText !== null || props.errorText !== undefined}>
        {props.errorText}
      </HelperText>
    </View>
  );
};

export default OutlinedInput;
