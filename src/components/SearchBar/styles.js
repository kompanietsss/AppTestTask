import {StyleSheet} from 'react-native';
import {w, h} from '../../helpers/misc';
import {BLACK} from '../../helpers/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: (2 * h) / 100,
    paddingBottom: (2 * h) / 100,
    backgroundColor: '#fff',
  },
  containerStyle: {
    width: '95%',
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 10,
    borderRadius: 25,
  },
  inputContainerStyle: {
    borderRadius: 25,
    backgroundColor: '#fff',
    height: (7 * h) / 100,
  },
  inputStyle: {
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: (4.5 * w) / 100,
    color: BLACK,
  },
});
