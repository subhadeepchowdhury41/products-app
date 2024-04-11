import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signup';
import {useSelector} from 'react-redux';
import SplashScreen from '../screens/Splash';
import ProductDetails from '../screens/Product';
import EditProduct from '../screens/Product/Edit';
import {setTopLevelNavigator} from '../services/navigation';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const {userId, splash} = useSelector((state: any) => state.auth);
  return (
    <NavigationContainer ref={ref => setTopLevelNavigator(ref)}>
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
            <Stack.Screen
              name="ProductDetails"
              options={{
                headerShown: false,
              }}
              component={ProductDetails}
            />
            <Stack.Screen
              name="ProductEdit"
              options={{
                headerShown: false,
              }}
              component={EditProduct}
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
