import React from 'react';
import {View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ion from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {connect} from 'react-redux';
import * as authAction from '../../redux/actions/authActions.js';
import PropTypes from 'prop-types';

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/onboarding/doodle_reading.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/onboarding/frontal_home.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    // image: require('../../assets/onboarding/Giant Phone.png'),
    image: require('../../assets/onboarding/stting_on_floor.png'),
    backgroundColor: '#22bcb5',
  },
];

const Onboarding = ({...props}) => {
  // console.log('Onboarding  props=>', props);

  const {updateOnboarding} = props;
  const navigation = useNavigation();

  const _renderItem = ({item}) => {
    return (
      <View style={styles().slide}>
        <View style={styles().titleContainer}>
          <Text style={styles().title}>{item.title}</Text>
        </View>
        <View style={styles().imageContainer}>
          <Image source={item.image} style={styles().image} />
        </View>
        <View style={styles().textContainer}>
          <Text style={styles().text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles().buttonCircle}>
        <Ion
          name="arrow-forward-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles().buttonCircle}>
        <Ion
          name="checkmark-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={styles().skipView}>
        <Text style={styles().skipTextColor}>Skip</Text>
      </View>
    );
  };

  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    updateOnboarding(true);
    navigation.navigate('Login');
    // this.setState({showRealApp: true});
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      renderSkipButton={_renderSkipButton}
      onDone={_onDone}
      onSkip={_onDone}
      dotClickEnabled={true}
      showNextButton={true}
      showDoneButton={true}
      showSkipButton={true}
    />
  );
};

Onboarding.propTypes = {
  onboardingStatus: PropTypes.bool.isRequired,
  updateOnboarding: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  // It is used to map the state to props so that you can use that state into your file
  return {
    onboardingStatus: state.auth.onboardingStatus,
  };
};

const mapDispatchToProps = dispatch => ({
  // It is used to map the dispatch methods (methods may heve their parameters) to props so that you can use that methods into your file
  updateOnboarding: status => dispatch(authAction.updateOnboarding(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);
