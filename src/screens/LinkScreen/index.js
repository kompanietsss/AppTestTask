import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import styles from './styles';

const LinkScreen = ({route}) => {
  const {href} = route.params;

  return (
    <View style={styles.container}>
      <WebView source={{uri: href}} />
    </View>
  );
};

export default LinkScreen;
