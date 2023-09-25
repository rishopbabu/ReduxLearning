import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    </>
  );
};

export default App;
