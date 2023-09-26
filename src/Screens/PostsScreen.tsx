import React, { useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/posts/postsAction";
import { NavigationProp } from "@react-navigation/native";


const PostScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const access_token = useSelector((state: any) => state.userDataReducer.payload.access_token)
  console.log("access_token in post action:", access_token)
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      await getAllPosts(access_token)(dispatch);
    } catch (error: any) {
      console.log('Login failed', `${error.message}`)
    }
  };

  useEffect
    return (
        <ScrollView>
          <View>
            <Text>Post Screen</Text>
            <Button title="Press me" onPress={handleLogin}/>
          </View>
        </ScrollView>
      );
}

export default PostScreen;