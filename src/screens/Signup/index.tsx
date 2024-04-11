import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {globalStyles} from '../../utils/consts';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {signUpRequest} from '../../containers/Auth/actions';
import Toast from 'react-native-toast-message';
import OutlinedInput from '../../components/ui/OutlinedInput';
import SolidButton from '../../components/ui/SolidButton';
import OutlinedButton from '../../components/ui/OutlinedButton';

const SignupScreen = () => {
  const [mounted, setMounted] = useState(false);
  const {loading} = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const [error, setError] = useState<{
    name?: string | null;
    email?: string | null;
    password?: string | null;
  }>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }
    if (name === '') {
      setError(prev => ({...prev, name: 'Please enter your name'}));
      return;
    }
    setError(prev => ({
      ...prev,
      name: null,
    }));
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
  }, [name, email, password]);
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleSignup = async () => {
    if (error.name || error.email || error.password) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please enter valid name, email and password',
      });
      return;
    }
    dispatch(signUpRequest(name, email, password));
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Signup</Text>
      <OutlinedInput
        label="Name"
        value={name}
        onChangeText={setName}
        error={Boolean(error.name)}
        errorText={error.name}
      />
      <OutlinedInput
        label="Email"
        onChangeText={setEmail}
        error={Boolean(error.email)}
        autoCapitalize="none"
        keyboardType="email-address"
        errorText={error.email}
      />
      <OutlinedInput
        label="Password"
        secureTextEntry
        onChangeText={setPassword}
        error={Boolean(error.password)}
        errorText={error.password}
      />
      <SolidButton loading={loading} label="Signup" onPress={handleSignup} />
      <OutlinedButton label="Login" onPress={handleLogin} />
    </View>
  );
};

export default SignupScreen;
