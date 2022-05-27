/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
import PropTypes from 'prop-types';
import CustomButton from '../../components/CustomButton';

const Home = ({...props}) => {
  const {user, isLoggedIn} = props;

  useEffect(() => {
    console.log('user ==>', user);
    console.log('isLoggedIn ==>', isLoggedIn);
  }, []);

  return (
    <View style={styles().HomeContainer}>
      <CustomButton backgroundColor="red" />
      <CustomButton backgroundColor="blue" />
      <CustomButton backgroundColor="green" />
    </View>
  );
};
Home.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
