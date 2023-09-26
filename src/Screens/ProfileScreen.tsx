import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  const user_details = useSelector(
    (state: any) => state.userDataReducer.payload.user_details,
  );

  const dateString = user_details.created_at;
  const date = new Date(dateString);
  const localDateString = date.toLocaleDateString();

  console.log('Profile page:', user_details);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>{user_details.name}</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{user_details.email}</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.info}>{user_details.phone}</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Account Created at:</Text>
        <Text style={styles.info}>{localDateString}</Text>
      </View>
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
