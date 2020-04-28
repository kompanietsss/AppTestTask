import {StyleSheet} from 'react-native';
import {w, h} from '../../helpers/misc';
import {LIGHTBLUE, BLACK, DARKGRAY, LIGHTRED} from '../../helpers/colors';

export default StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
  },
  card: {
    padding: (2 * w) / 100,
    borderWidth: 0,
    borderRadius: 15,
    backgroundColor: LIGHTBLUE,
  },
  image: {width: 100, height: 100, borderRadius: 5},
  title: {
    fontSize: (3.5 * w) / 100,
    color: BLACK,
    marginBottom: h / 100,
  },
  summary: {
    textAlign: 'center',
    fontSize: (3 * w) / 100,
    color: DARKGRAY,
  },
  buttonContainer: {marginTop: (2 * h) / 100, marginBottom: (2 * h) / 100},
  titleButton: {fontSize: (3.5 * w) / 100, color: LIGHTRED},
  buttonStyle: {
    borderRadius: 5,
    borderColor: LIGHTRED,
    borderWidth: 2,
    width: (40 * w) / 100,
  },
});
