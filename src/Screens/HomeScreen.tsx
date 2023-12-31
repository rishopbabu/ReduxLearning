import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import PostScreen from './PostsScreen';
import ProfileScreen from './ProfileScreen';
import { UsersScreen } from './UsersScreen';

const Tab = createMaterialBottomTabNavigator();

const CustomTabIcon = ({imageSource}: {imageSource: any}) => (
  <Image
    source={imageSource}
    style={styles.imageContainer}
    resizeMode="contain"
  />
);

function MaterialTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}>
      <Tab.Screen
        name="Latest Posts"
        component={PostScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabIcon
              imageSource={
                focused
                  ? require('/Users/mac-obs-51/Documents/RNLearning/ReduxLearning/src/assets/signpost.and.arrowtriangle.up.circle.fill.png')
                  : require('/Users/mac-obs-51/Documents/RNLearning/ReduxLearning/src/assets/signpost.and.arrowtriangle.up.circle.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={UsersScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabIcon
              imageSource={
                focused
                  ? require('/Users/mac-obs-51/Documents/RNLearning/ReduxLearning/src/assets/person.3.fill.png')
                  : require('/Users/mac-obs-51/Documents/RNLearning/ReduxLearning/src/assets/person.3.sequence.png')
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="My Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <CustomTabIcon
              imageSource={
                focused
                  ? require('/Users/mac-obs-51/Documents/RNLearning/ReduxLearning/src/assets/person.crop.circle.fill.png')
                  : require('/Users/mac-obs-51/Documents/RNLearning/ReduxLearning/src/assets/person.crop.circle.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeScreen = () => {
  return <MaterialTabs />;
};

const styles = StyleSheet.create({
  infoButtonConatainer: {
    flex: 1,
    color: 'white',
    marginRight: 10,
  },

  imageContainer: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;
