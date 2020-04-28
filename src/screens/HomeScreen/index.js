import React, {useEffect, useCallback, useState} from 'react';
import {View, FlatList} from 'react-native';
import SearchInput from '../../components/SearchBar';
import {getData} from '../../api/posts';
import styles from './styles';
import Link from '../../components/Link';
import Video from '../../components/Video';

const HomeScreen = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  const getPosts = useCallback(async () => {
    const data = await getData();

    // We need to make error handler
    if (data.length > 0) {
      setPosts(data);
    }
  }, []);

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPost = item => {
    const type = item.type.value;
    const {content, link} = item;

    const Posts = {
      video: (
        <Video
          onPress={() => navigation.navigate('VideoScreen', content)}
          item={item}
        />
      ),
      link: (
        <Link
          onPress={() => navigation.navigate('LinkScreen', link)}
          item={item}
        />
      ),
      default: null,
    };

    return Posts[type] || Posts.default;
  };

  const filteredPosts =
    value.length !== 0 && posts.length > 0
      ? posts.filter(item =>
          item.title.toLowerCase().includes(value.toLowerCase()),
        )
      : posts;

  return (
    <View style={styles.container}>
      <SearchInput onChangeText={setValue} value={value} />

      <FlatList
        data={filteredPosts}
        renderItem={({item}) => renderPost(item)}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.postsContainer}
      />
    </View>
  );
};

export default HomeScreen;
