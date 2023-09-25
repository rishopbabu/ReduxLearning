import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/login/loginAction';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const token = useSelector((state: any) => state.token);
    const error = useSelector((state: any) => state.error);
    const isLoading = useSelector((state: any) => state.loading);
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  useEffect(() => {
    setUsername('rishop@yopmail.com')
    setPassword('Rishop@123')
  }, []);

  const handleLogin = async () => {
    dispatch(login(username, password));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
          value={password}
        />
      </View>
      <Button title="Login" onPress={handleLogin} />
      <View style={{height: 5}}></View>
      <Button title="Register" onPress={handleLogin} />
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
