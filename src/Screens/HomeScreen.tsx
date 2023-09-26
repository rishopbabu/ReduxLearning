import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const access_token = useSelector(
    (state: any) => state.loginReducer.access_token,
  );
  const user_details = useSelector(
    (state: any) => state.loginReducer.user_details,
  );

  const created_time = user_details;
  const date = new Date(created_time.created_at);
  const formatedDate = date.toLocaleDateString();
  return (
    <View>
      <Text>User Details:</Text>
      <Text>Name: {user_details.name} </Text>
      <Text>Email: {user_details.email}</Text>
      <Text>phone: {user_details.phone}</Text>
      <Text>Account created at: {formatedDate}</Text>
    </View>
  );
};

export default HomeScreen;
