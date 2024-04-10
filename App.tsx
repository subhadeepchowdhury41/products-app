import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import AppNavigator from './src/routes/navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
      <Toast />
    </GestureHandlerRootView>
  );
};

export default App;
