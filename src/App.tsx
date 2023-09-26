import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import HomeScreen from './Screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: 'blue',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={RegistrationScreen} />
            <Stack.Screen name="My App" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
