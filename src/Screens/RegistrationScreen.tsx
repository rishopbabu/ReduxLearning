// RegistrationScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {register} from '../redux/register/registerAction';
import { NavigationProp } from '@react-navigation/native';

const RegistrationScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

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

  const handleRegistration = async () => {
    try {
      await (register(name, email, phone, password))(dispatch);
      showAlert(
        'Registration Successful',
        'Your registration was successful. Click OK to proceed to login.',
        () => {
          // Navigate to the login screen
          navigation.navigate('Login');
        },
      );
    } catch (error: any) {
      showAlert('Registration Failed', `${error.message}`);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Register</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Name"
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder="Enter your Phone Number"
            onChangeText={text => setPhone(text)}
            value={phone}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>e-Mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            onChangeText={text => setEmail(text)}
            value={email}
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
        <Button title="Create Account" onPress={handleRegistration} />
      </View>
    </ScrollView>
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

export default RegistrationScreen;
