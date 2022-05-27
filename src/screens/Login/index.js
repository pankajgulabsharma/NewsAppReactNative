/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {useNavigation, useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import * as yup from 'yup';
import {Formik, Field} from 'formik';
import {loginUser} from '../../api/Auth';
import {showSnackBar} from '../../Utils/SnackBar.js';
import {connect} from 'react-redux';
import * as AuthActions from '../../redux/actions/authActions.js';
import PropTypes from 'prop-types';
import {setAxiosConfig} from '../../Utils/setTokenInterceptor.js';

const signInValidationSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
});

const Login = ({...props}) => {
  const {user, isLoggedIn, updateUserAccessToken, updateUserLogin} = props;

  // const theme = useTheme();
  const navigation = useNavigation();

  const [showSpinner, setShowSpinner] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const {
    colors: {background, text, lightGray5, card, secondary, primary},
    dark,
  } = useTheme();

  useEffect(() => {
    // console.log('Login theme=>', theme);
  }, []);
  return (
    <View style={styles(background).loginMain}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().headerContainer}>
          <Text style={styles(background, text).welcomeText}>Welcome</Text>
          <Text style={styles(background, text, lightGray5).signInText}>
            Sign in to access more features.
          </Text>
        </View>

        <View style={styles().formContainer}>
          <Formik
            validationSchema={signInValidationSchema}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={async values => {
              setShowSpinner(true);
              console.log('values ===> ', values);
              loginUser(values)
                .then(res => {
                  console.log('Response ', res);
                  setShowSpinner(false);
                  updateUserLogin(res, true);
                  updateUserAccessToken(res.token);
                  navigation.navigate('Tabs');
                  showSnackBar('Successfully LoggedIn');
                  setAxiosConfig(res);

                  console.log('user comming from state==>', user); // it is login so no user login here so it takes default value from reducer
                  console.log('isLoggedIn comming from state==>', isLoggedIn); // it is login so no user login here so it takes default value from reducer
                })
                .catch(err => {
                  console.log('Error ===>', err);
                  console.log('Error ', err.response?.data?.msg);
                  setShowSpinner(false);
                  showSnackBar(err.response?.data?.msg, 'ERROR');
                });
            }}>
            {({
              handleSubmit,
              isValid,
              values,
              errors,
              handleChange,
              touched,
            }) => (
              <>
                <View style={styles().inputContainer}>
                  <View style={styles().wrapper}>
                    <TextInput
                      style={styles(background, text, lightGray5).input}
                      placeholder="Enter Email"
                      keyboardType="email-address"
                      name="email"
                      onChangeText={handleChange('email')}
                    />
                    {errors.email && touched.email && (
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'red',
                          marginTop: scale(5),
                        }}>
                        {' '}
                        {errors.email}
                      </Text>
                    )}
                  </View>

                  <View style={styles().wrapper}>
                    <View style={styles(background, text, lightGray5).input}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <TextInput
                          placeholder="Enter Password"
                          secureTextEntry={showPassword}
                          style={{
                            height: scale(50),
                            color: text,
                            fontWeight: 'bold',
                            flex: 1,
                          }}
                          name="password"
                          onChangeText={handleChange('password')}
                        />

                        <TouchableOpacity
                          onPress={() => {
                            setShowPassword(prevState => !prevState);
                          }}
                          hitSlop={{top: 30, bottom: 30, left: 50, right: 80}}
                          style={{alignSelf: 'center'}}>
                          <Icon
                            name={showPassword ? 'key-outline' : 'key'}
                            size={20}
                            color={text}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    {errors.password && touched.password && (
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'red',
                          marginTop: scale(5),
                        }}>
                        {' '}
                        {errors.password}
                      </Text>
                    )}
                  </View>

                  <View style={styles().forgotPasswordContainer}>
                    <TouchableOpacity
                      hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                      <Text style={styles().forgotPasswordText}>
                        Forgot Password
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles().btnContainer}>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                      backgroundColor: dark ? card : secondary,
                      height: scale(50),
                      borderRadius: scale(10),
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {showSpinner ? (
                      <ActivityIndicator
                        color={'#fff'}
                        style={{marginLeft: scale(5)}}
                      />
                    ) : (
                      <Text style={{color: '#fff', marginLeft: scale(5)}}>
                        Login
                      </Text>
                    )}
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>

        <View style={styles().footerContainer}>
          <View style={styles().footerContainerInner}>
            <Text style={styles().newUserText}>I am a new user,</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={
                  styles(background, text, lightGray5, primary, dark).signText
                }>
                {' '}
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
            <Text style={{color: lightGray5}}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

Login.propTypes = {
  user: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  updateUserLogin: PropTypes.func.isRequired,
  updateUserAccessToken: PropTypes.func.isRequired,
};

export const mapStateToProps = state => {
  return {user: state.auth.user, isLoggedIn: state.auth.isLoggedIn};
};
export const mapDispatchToProps = dispatch => ({
  updateUserLogin: (user, isLoggedIn) =>
    dispatch(AuthActions.updateUserLogin(user, isLoggedIn)),
  updateUserAccessToken: accessToken =>
    dispatch(AuthActions.updateUserAccessToken(accessToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
