import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import AppNavigator from './src/routes/navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <GestureHandlerRootView>
      <PaperProvider>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </PaperProvider>
      <Toast />
    </GestureHandlerRootView>
  );
};

export default App;
