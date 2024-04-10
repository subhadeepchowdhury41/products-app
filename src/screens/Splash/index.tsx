/* eslint-disable react-hooks/exhaustive-deps */
import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {globalStyles} from '../../utils/consts';
import {useDispatch} from 'react-redux';
import {restoreRequest} from '../../containers/Auth/actions';

const SplashScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(restoreRequest());
    }, 1000);
  }, []);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;
