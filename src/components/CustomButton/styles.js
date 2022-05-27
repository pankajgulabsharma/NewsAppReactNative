import EStyleSheet from 'react-native-extended-stylesheet';

export const styles = () =>
  EStyleSheet.create({
    singleButton: {
      backgroundColor: 'transparent',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 10,
      shadowOpacity: 0.3,
      elevation: 2,
      padding: 10,
      margin: 5,
    },
  });
