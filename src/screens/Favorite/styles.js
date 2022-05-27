import EstyleSheet from 'react-native-extended-stylesheet';
import {moderateScale} from 'react-native-size-matters';

export const styles = () =>
  EstyleSheet.create({
    FavoriteContainer: {
      flex: 1,
      backgroundColor: 'red',
      paddingHorizontal: moderateScale(20),
    },
  });
