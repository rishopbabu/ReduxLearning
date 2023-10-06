import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPosts} from '../redux/posts/postsAction';
import {NavigationProp} from '@react-navigation/native';

const PostScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const dispatch = useDispatch();

  const access_token = useSelector(
    (state: any) => state?.userDataReducer?.payload?.access_token,
  );

  const posts_data = useSelector(
    (state: any) => state?.postsDataReducer?.payload,
  );
  console.log('posts_data:', posts_data?.post_details);
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        await getAllPosts(access_token)(dispatch);
      } catch (error: any) {
        console.error('Error fetching posts:', error);
        // Handle error
      } finally {
      }
    };
    fetchAllPosts();
  }, [dispatch]);

  const renderItem = ({item}: {item: any}) => {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          {item?.user_detail?.profile_pic ? (
            <Image
              source={{
                uri: `data:image/jpeg;base64,${item?.user_detail?.profile_pic}`,
              }}
              style={styles.profilePicture}
              onError={() => {}}
              onLoad={() => {}}
            />
          ) : (
            <Image
              source={require('../assets/default_profile_picture.png')}
              style={styles.profilePicture}
            />
          )}

          <Text style={styles.username}>
            {item?.user_detail?.first_name} {item?.user_detail?.last_name}
          </Text>
        </View>

        <Image
          source={{uri: `data:image/jpeg;base64,${item?.post_image}`}}
          style={styles.postImage}
        />

        <Text style={styles.caption}>{item?.caption}</Text>

        <Text style={styles.likes}>{`${item?.votes} likes`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Posts</Text>

        {/* Create Post Button */}
        <TouchableOpacity
          style={styles.createPostButton}
          onPress={() => {
            // Implement the create post functionality
          }}>
          <Text style={styles.createPostButtonText}>➕ Create Post</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts_data?.post_details}
        keyExtractor={item => item?.post_id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  postContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  caption: {
    padding: 10,
    fontSize: 16,
  },
  likes: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  createPostButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  createPostButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default PostScreen;
