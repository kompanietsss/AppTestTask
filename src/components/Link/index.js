import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const Link = ({onPress, item}) => {
  const {title, media_group, summary} = item;
  const img = media_group[0].media_item[0].src;

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <Card containerStyle={styles.card}>
        <View style={styles.cardContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.summary}>{summary}</Text>
          </View>
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
        </View>
      </Card>
    </TouchableOpacity>
  );
};

Link.propTypes = {
  onPress: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default Link;
