import {StyleSheet} from 'react-native';
import {w, h} from '../../helpers/misc';
import {LIGHTBLUE, BLACK, DARKGRAY} from '../../helpers/colors';

export default StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    padding: (2 * w) / 100,
    borderWidth: 0,
    borderRadius: 15,
    backgroundColor: LIGHTBLUE,
  },
  image: {width: 100, height: 100, borderRadius: 5},
  textContainer: {
    width: '70%',
  },
  title: {
    fontSize: (3.5 * w) / 100,
    color: BLACK,
    marginBottom: h / 100,
  },
  summary: {
    fontSize: (3 * w) / 100,
    color: DARKGRAY,
  },
});
