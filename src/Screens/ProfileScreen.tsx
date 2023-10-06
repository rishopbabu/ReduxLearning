import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {StackActions, NavigationProp} from '@react-navigation/native';

const ProfileScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const user_details = useSelector(
    (state: any) => state.userDataReducer.payload,
  );

  const user = user_details.user_detail
  console.log("aa",user)
  const dateString = user.updated_by;
  const date = new Date(dateString);
  const localDateString = date.toLocaleDateString();

  const handleLogout = () => {
    
    navigation.dispatch(StackActions.replace('Login'));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.info}>{user.first_name}</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.info}>{user.last_name}</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{user.email}</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>{user.phone}</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Account Created at:</Text>
        <Text style={styles.info}>{localDateString}</Text>
      </View>
      <View style={{height: 100}}></View>

      <Button
        title="LogOut"
        color="#007aff"
        onPress={() => {
          handleLogout()
        }}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfoContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginLeft: 10,
  },
});
