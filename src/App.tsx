import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/login/rootReducer';
import LoginScreen from './Screens/LoginScreen';

const store = createStore(rootReducer, applyMiddleware(thunk))


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <LoginScreen />
    </Provider>
  );
};

export default App;
