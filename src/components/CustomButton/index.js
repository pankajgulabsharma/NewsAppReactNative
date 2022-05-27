import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const CustomButton = ({backgroundColor}) => {
  return (
    <TouchableOpacity
      style={[styles().singleButton, {backgroundColor}]}
      onPress={console.log('Home onPress')}
      activeOpacity={0.5}>
      <Ionicons
        name="heart-sharp"
        size={25}
        color={'white'}
        // style={{alignSelf: 'center'}}
      />
      {/* <Text>Home</Text> */}
    </TouchableOpacity>
  );
};
export default CustomButton;
