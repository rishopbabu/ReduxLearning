import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Alert, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsers} from '../redux/users/usersAction';
import {NavigationProp} from '@react-navigation/native';
import { config } from '../Constants';

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
  console.log("Users_list:", users_list)
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


  // const imagePath = config.url.BASE_URL+'/'
  // console.log("imagepath:", imagePath)
  
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.item}>
     {item.profile_pic ? (
      <Image
        source={{ uri: item.profile_pic }}
        style={styles.profilePicture}
        onError={() => {
          console.log('Error loading image:', item.profile_pic);
        }}
        onLoad={() => {
          console.log('Image loaded successfully:', item.profile_pic);
        }}
      />
    ) : (
      <Image
        source={require('../assets/default_profile_picture.png')} // Replace with your default image source
        style={styles.profilePicture}
      />
    )}
      <View style={styles.details}>
        <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
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
  profilePicture: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    borderRadius: 25, // To make it a circular image, set borderRadius to half of the width and height
    marginRight: 16, // Add spacing between the profile picture and details
  },
  details: {
    flex: 1, // Allow the details to take up the remaining space
    flexDirection: 'column'
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
