import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {globalStyles} from '../../utils/consts';
import Spacer from '../../components/ui/Spacer';
import {useDispatch} from 'react-redux';
import {signInRequest} from '../../containers/Auth/actions';
import OutlinedButton from '../../components/ui/OutlinedButton';
import SolidButton from '../../components/ui/SolidButton';
import OutlinedInput from '../../components/ui/OutlinedInput';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [error, setError] = useState<{
    password?: string | null;
    email?: string | null;
  }>({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (email === '') {
      setError(prev => ({...prev, email: 'Please enter your email'}));
      return;
    }
    if (
      RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/).test(email) === false
    ) {
      setError(prev => ({...prev, email: 'Please enter a valid email'}));
      return;
    }
    setError(prev => ({
      ...prev,
      email: null,
    }));
    if (password === '') {
      setError(prev => ({
        ...prev,
        password: 'Please enter your password',
      }));
      return;
    }
    setError(prev => ({
      ...prev,
      password: null,
    }));
  }, [email, password]);
  const handleLogin = () => {
    if (error.email || error.password) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter valid email and password',
      });
      return;
    }
    dispatch(signInRequest(email, password));
  };
  const handleSignup = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login</Text>
      <OutlinedInput
        label="Email"
        onChangeText={setEmail}
        error={Boolean(error.email)}
        errorText={error.email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <OutlinedInput
        label="Password"
        secureTextEntry
        onChangeText={setPassword}
        error={Boolean(error.password)}
        errorText={error.password}
      />
      <Spacer />
      <SolidButton label="Login" onPress={handleLogin} />
      <OutlinedButton label="Sign Up" onPress={handleSignup} />
    </View>
  );
};

export default LoginScreen;
