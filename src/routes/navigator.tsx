import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import {useSelector} from 'react-redux';
import SplashScreen from '../screens/Splash';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const {userId, splash} = useSelector((state: any) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splash && (
          <>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Splash"
              component={SplashScreen}
            />
          </>
        )}
        {userId ? (
          <>
            <Stack.Screen
              name="Home"
              options={{
                headerShown: false,
              }}
              component={HomeScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Signup"
              component={SignupScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
