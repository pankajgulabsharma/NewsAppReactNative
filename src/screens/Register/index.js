/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {styles} from './styles';
import {useNavigation, useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import * as yup from 'yup';
import {Formik, Field} from 'formik';
import {registerUser} from '../../api/Auth';
import {showSnackBar} from '../../Utils/SnackBar';

const signUpValidationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'password must have small letter')
    .matches(/\w*[A-Z]\w*/, 'password must have capital letter')
    .matches(/\d/, 'password must have number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'password must have special characters',
    )
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required!'),
});
const Register = () => {
  // const theme = useTheme();
  const {
    colors: {background, text, lightGray5, card, secondary, primary},
    dark,
  } = useTheme();

  useEffect(() => {
    // console.log('Login theme=>', theme);
  }, []);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const navigation = useNavigation();
  return (
    <View style={styles(background).loginMain}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles().headerContainer}>
          <Text style={styles(background, text).welcomeText}>Welcome</Text>
          <Text style={styles(background, text, lightGray5).signInText}>
            Sign Up to access more features.
          </Text>
        </View>

        <View style={styles().formContainer}>
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            onSubmit={async values => {
              setShowSpinner(true);
              console.log('values ', values);
              registerUser(values)
                .then(res => {
                  console.log('Response ', res);
                  setShowSpinner(false);
                  // navigation.navigate('Tabs');
                  // showSnackBar('Successfully LoggedIn');
                  Alert.alert('', res.msg, [
                    {text: 'Ok', onPress: () => navigation.navigate('Login')},
                  ]);
                })
                .catch(err => {
                  console.log('Error ', err);
                  console.log('Error ', err.response.data?.msg);
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
                      placeholder="Enter Name"
                      placeholderTextColor={text}
                      name="name"
                      onChangeText={handleChange('name')}
                    />
                    {errors.name && touched.name && (
                      <Text
                        style={{
                          fontSize: scale(10),
                          color: 'red',
                          marginTop: scale(5),
                        }}>
                        {' '}
                        {errors.name}
                      </Text>
                    )}
                  </View>
                  <View style={styles().wrapper}>
                    <TextInput
                      style={styles(background, text, lightGray5).input}
                      placeholder="Enter Email"
                      placeholderTextColor={text}
                      keyboardType="email-address"
                      name="email"
                      onChangeText={handleChange('email')}
                    />
                    {errors.email && touched.email && (
                      <Text
                        style={{
                          fontSize: scale(10),
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
                          placeholderTextColor={text}
                          secureTextEntry={showPassword}
                          name="password"
                          onChangeText={handleChange('password')}
                          style={{
                            height: scale(50),
                            color: text,
                            fontWeight: 'bold',
                            flex: 1,
                          }}
                        />
                        <TouchableOpacity
                          onPress={() =>
                            setShowPassword(prevState => !prevState)
                          }
                          style={{alignSelf: 'center'}}
                          hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                          <Icon
                            name={showPassword ? 'key-outline' : 'key'}
                            size={24}
                            color={text}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    {errors.password && touched.password && (
                      <Text
                        style={{
                          fontSize: scale(10),
                          color: 'red',
                          marginTop: scale(5),
                        }}>
                        {' '}
                        {errors.password}
                      </Text>
                    )}
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
                        color="#fff"
                        style={{marginLeft: scale(5)}}
                      />
                    ) : (
                      <Text style={{color: '#fff'}}>Registration</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>

        <View style={styles().footerContainer}>
          <View style={styles().footerContainerInner}>
            <Text style={styles().newUserText}>I am already registered,</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={
                  styles(background, text, lightGray5, primary, dark).signUpText
                }>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={{color: lightGray5}}>Skip</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
