import {TextInputProps} from 'react-native-paper';

export interface InputProps extends TextInputProps {
  label: string;
  errorText?: string | null;
}
