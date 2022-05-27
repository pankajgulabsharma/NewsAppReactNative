/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import {styles} from './styles';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setAxiosConfig} from '../../Utils/setTokenInterceptor.js';

const SplashScreen = ({...props}) => {
  const {user, isLoggedIn, accessToken} = props;

  const [isVisible, setIsVisible] = useState(true);
  const navigation = useNavigation();
  const theme = useTheme();

  console.log('SplashScreen theme==>', theme);
  const {
    colors: {background},
    dark,
  } = theme;

  console.log(background, dark);
  useEffect(() => {
    console.log('SplashScreen user===>', user);
    console.log('SplashScreen isLoggedIn===>', isLoggedIn);
    console.log('SplashScreen accessToken===>', accessToken);
    setTimeout(() => {
      setIsVisible(false);
      if (isLoggedIn) {
        console.log('yes ur logged in');
        setAxiosConfig(user, true);
      }
      navigation.navigate(isLoggedIn ? 'Tabs' : 'Login');
    }, 1000);
  }, []);

  const renderSplash = () => {
    return (
      <View style={styles().SplashScreen_RootView}>
        <View style={styles().SplashScreen_ChildView}>
          <Image
            source={
              dark
                ? require('../../assets/splash_icon_light.png')
                : require('../../assets/splash_icon_dark.png')
            }
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles(background).MainContainer}>
      {isVisible === true ? renderSplash() : null}
    </View>
  );
};

SplashScreen.propTypes = {
  user: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  // accessToken: PropTypes.
};

export const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn,
    accessToken: state.auth.accessToken,
  };
};
export const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
