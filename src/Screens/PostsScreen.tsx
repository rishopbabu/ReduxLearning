import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllPosts} from '../redux/posts/postsAction';
import {NavigationProp} from '@react-navigation/native';

const PostScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const access_token = useSelector(
    (state: any) => state?.userDataReducer?.payload?.access_token,
  );
  
  const refresh_token = useSelector(
    (state: any) => state?.userDataReducer?.payload?.refresh_token,
  );
  
  const posts_data = useSelector(
    (state: any) => state?.postsDataReducer?.payload,
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

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        await getAllPosts(access_token)(dispatch);
      } catch (error: any) {
        showAlert('Some Error:', `${error.message}`);
      }
    };
    fetchAllPosts();
  }, []);

  const flatListComponent = (item: any) => {
    return (
      <View style={styles.postContainer}>
        <Text style={styles.postUserDetail}>
          {item?.Post?.user_detail?.name}
        </Text>

        <Text style={styles.postTitle}>{item?.Post?.title}</Text>

        <Text style={styles.postContent}>{item?.Post?.content}</Text>

        <View style={styles.voteContainer}>
          <Text style={styles.postVotes}>Votes: {item?.votes}</Text>

          <View style={styles.voteButtonsContainer}>
            <TouchableOpacity
              style={styles.voteButton}
              onPress={() => {
                // Implement the plus button functionality
              }}>
              <Text style={styles.voteButtonText}>Like</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.voteButton}
              onPress={() => {
                // Implement the share button functionality
              }}>
              <Text style={styles.voteButtonText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
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
        data={posts_data}
        keyExtractor={item => item?.Post?.id.toString()}
        renderItem={({item}) => flatListComponent(item)}
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  postContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  postUserDetail: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postContent: {
    fontSize: 18,
    marginBottom: 16,
  },
  voteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postVotes: {
    fontSize: 18,
    color: 'blue',
  },
  voteButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  voteButton: {
    backgroundColor: '#007aff',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 8,
  },
  voteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PostScreen;
