import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import LoginScreen from './Screens/LoginScreen';
import store from './redux/store';


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
