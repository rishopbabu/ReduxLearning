import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../redux/login/loginAction';
import {StackActions} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let storageKey = '@user_data';

const LoginScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setUsername('rishop@yopmail.com');
    setPassword('Rishop@123');
  });
  
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  
  const checkButtonDisabled = () => {
    const areAllFieldsFilled = username.trim() !== '' && password.trim() !== '';
    setIsButtonDisabled(!areAllFieldsFilled);
  };

  const showAlert = (title: string, message: string, callback?: () => void) => {
    Alert.alert(title, message, [
      {
        text: 'OK',
        onPress: () => {
          if (callback) {
            callback(); // Execute the callback function (navigate to login)
          }
        },
      },
    ]);
  };

  const handleLogin = async () => {
    try {
      await login(username, password)(dispatch);
      navigation.dispatch(StackActions.replace('Home'));
    } catch (error: any) {
      showAlert('Login Failed', `${error.message}`);
    }
  };

  const handleRegister = async () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>e-Mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your e-Mail"
          onChangeText={text => {setUsername(text), checkButtonDisabled()}}
          value={username}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          onChangeText={text => {setPassword(text), checkButtonDisabled()}}
          secureTextEntry
          value={password}
        />
      </View>
      <Button title="Login" onPress={handleLogin} disabled={isButtonDisabled} />
      <View style={{height: 5}}></View>
      <Button title="Register" onPress={handleRegister}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
});

export default LoginScreen;
