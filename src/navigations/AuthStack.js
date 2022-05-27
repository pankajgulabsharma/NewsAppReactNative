import React from 'react';

import Tabs from './Tabs';
import SplashScreen from '../screens/SplashScreen';
import Register from '../screens/Register';
import Onboarding from '../screens/Onboarding';
import NewsDetails from '../screens/NewsDetails';
import CategoryList from '../screens/CategoryList';
import About from '../screens/About';
import Login from '../screens/Login';
import PropTypes from 'prop-types';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {connect} from 'react-redux';

const AuthStack = ({...props}) => {
  console.log('AuthStack  props=>', props);

  const {onboardingStatus} = props;
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={onboardingStatus ? 'Splash' : 'Onboarding'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />

      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
      <Stack.Screen name="CategoryList" component={CategoryList} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

AuthStack.propTypes = {
  onboardingStatus: PropTypes.bool.isRequired,
};
const mapStateToProps = state => {
  // It is used to map the state to props so that you can use that state into your file
  return {
    onboardingStatus: state.auth.onboardingStatus,
  };
};

export default connect(mapStateToProps)(AuthStack);
