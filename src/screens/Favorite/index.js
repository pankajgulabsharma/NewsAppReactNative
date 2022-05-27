/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const Favorite = () => {
  return (
    <View style={styles().FavoriteContainer}>
      <View style={{flex: 2, backgroundColor: 'blue'}} />
      <View style={{flex: 6, backgroundColor: 'green'}} />
    </View>
  );
};

export default Favorite;
