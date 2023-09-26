import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsers} from '../redux/users/usersAction';
import {NavigationProp} from '@react-navigation/native';

export const UsersScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const dispatch = useDispatch();

  const access_token = useSelector(
    (state: any) => state?.userDataReducer?.payload?.access_token,
  );

  const users_list = useSelector(
    (state: any) => state?.getAllUserDataReducer?.payload,
  );

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

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        await getAllUsers(access_token)(dispatch);
      } catch (error: any) {
        showAlert('Some Error:', `${error.message}`);
      }
    };
    fetchAllUsers();
  }, [access_token, dispatch]);

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <>
      <View style={styles.viewcontainer}>
        <Text style={styles.title}>Profile Page</Text>
      </View>
      <FlatList
        data={users_list}
        keyExtractor={item => item.id.toString()}
        style={styles.container}
        renderItem={renderItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 16,
  },
  viewcontainer: {
    padding: 15,
    backgroundColor: '#fff', // Background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#333',
  },
  phone: {
    fontSize: 16,
    color: '#333',
  },
  createdAt: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
});
