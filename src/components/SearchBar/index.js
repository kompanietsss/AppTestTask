import React from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchInput = ({onChangeText, value}) => (
  <View style={styles.container}>
    <SearchBar
      containerStyle={styles.containerStyle}
      inputContainerStyle={styles.inputContainerStyle}
      inputStyle={styles.inputStyle}
      clearIcon
      placeholder="חיפוש"
      onChangeText={onChangeText}
      value={value}
    />
  </View>
);

SearchInput.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchInput;
