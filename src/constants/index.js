import {DefaultTheme, DarkTheme} from '@react-navigation/native';

console.log('DefaultTheme', DefaultTheme);

/*   // This is DefaultTheme value comming from @react-navigation/native
{
  colors: {
    background: 'rgb(242, 242, 242)',
    border: 'rgb(216, 216, 216)',
    card: 'rgb(255, 255, 255)',
    notification: 'rgb(255, 59, 48)',
    primary: 'rgb(0, 122, 255)',
    text: 'rgb(28, 28, 30)',
  },
  dark: false,
};

*/

console.log('DarkTheme', DarkTheme);

/*   // This is DarkTheme value comming from @react-navigation/native
{
  colors: {
    background: 'rgb(1, 1, 1)',
    border: 'rgb(39, 39, 41)',
    card: 'rgb(18, 18, 18)',
    notification: 'rgb(255, 69, 58)',
    primary: 'rgb(10, 132, 255)',
    text: 'rgb(229, 229, 231)',
  },
  dark: true,
};
*/

export default {
  asyncStorageKey: 'NewsApp001',
  BASE_URL: 'https://officelappynewsapi.herokuapp.com/',
  THEME: {
    primary: '#062743',
    secondary: '#182952',

    // colors
    black: '#1E1F20',
    white: '#FFFFFF',

    lightGray: '#F5F5F6',
    lightGray2: '#F6F6F7',
    lightGray3: '#EFEFF1',
    lightGray4: '#F8F8F9',
    lightGray5: '#9ea9b3',
  },
  MyLightTheme: {
    ...DefaultTheme,
    // dark: false,
    colors: {
      ...DefaultTheme.colors,
      secondary: '#182952', // orange
      primary: '#062743', // gray

      // colors
      black: '#1E1F20',
      white: '#FFFFFF',

      lightGray: '#F5F5F6',
      lightGray2: '#F6F6F7',
      lightGray3: '#EFEFF1',
      lightGray4: '#F8F8F9',
      lightGray5: '#9ea9b3',
    },
  },
  MyDarkTheme: {
    ...DarkTheme,
    // dark: true,
    colors: {
      ...DarkTheme.colors,
      secondary: '#182952', // orange
      primary: '#062743', // gray

      // colors
      card: '#1f1f1f',
      black: '#1E1F20',
      white: '#FFFFFF',

      lightGray: '#F5F5F6',
      lightGray2: '#F6F6F7',
      lightGray3: '#EFEFF1',
      lightGray4: '#F8F8F9',
      lightGray5: '#9ea9b3',
    },
  },
};
