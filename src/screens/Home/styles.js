import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = () =>
  EStyleSheet.create({
    HomeContainer: {
      // height: Dimensions.get('window').height / 10,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      // backgroundColor: 'pink',
    },
  });
