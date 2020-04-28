import React from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

const VideoScreen = ({route}) => {
  const {src} = route.params;

  return (
    <View style={styles.container}>
      <Video
        source={{uri: src}}
        resizeMode={'contain'}
        style={styles.backgroundVideo}
        controls
        fullscreen
        fullscreenOrientation="landscape"
      />
    </View>
  );
};

export default VideoScreen;
