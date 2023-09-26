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
    <View>
      <Text>Profile Screen</Text>
      <View style={{height: 20}} />
      <Text>Name: {user_details.name}</Text>
      <Text>email: {user_details.email}</Text>
      <Text>phone: {user_details.phone}</Text>
      <Text>Account Created at: {localDateString}</Text>
    </View>
  );
};

export default ProfileScreen;
