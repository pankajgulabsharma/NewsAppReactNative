import SnackBar from 'react-native-snackbar';
import Toast from 'react-native-simple-toast';

export const showSnackBar = (msg, type = 'INFO') => {
  SnackBar.show({
    text: msg,
    duration: SnackBar.LENGTH_SHORT,
    backgroundColor: type === 'ERROR' ? '#f00' : '#04AA6D',
  });
};

export const showToast = msg => {
  Toast.show(msg);
};
