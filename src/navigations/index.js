/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import Constants from '../constants';
import axios from 'axios';
import {LogBox} from 'react-native';

const RootNavigation = () => {
  // console.log('RootNavigation Constants==>', Constants);
  const {MyLightTheme, MyDarkTheme, BASE_URL} = Constants;

  const setUrlConfig = () => {
    console.log('called setUrlConfig');
    console.log('BASE_URL==> ', BASE_URL);
    // axios.defaults.setUrlConfig = BASE_URL;
    axios.defaults.baseURL = BASE_URL;
  };
  useEffect(() => {
    setUrlConfig();
    LogBox.ignoreLogs(['Warning: ...']);
  }, []);

  console.log('RootNavigation MyDarkTheme==>', MyDarkTheme);
  return (
    <NavigationContainer theme={MyLightTheme}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
