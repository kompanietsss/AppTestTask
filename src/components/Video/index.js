import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card, Button} from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const Video = ({onPress, item}) => {
  const {title, media_group, summary} = item;
  const img = media_group[0].media_item[0].src;

  return (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.image}
          source={
            img
              ? {
                  uri: img,
                }
              : require('../../../assets/img/default-image.jpg')
          }
        />
        <Button
          title="PLAY"
          type="outline"
          titleStyle={styles.titleButton}
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonStyle}
          onPress={onPress}
        />
        <Text style={styles.summary}>{summary}</Text>
      </View>
    </Card>
  );
};

Video.propTypes = {
  onPress: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default Video;
