import {persistCombineReducers} from 'redux-persist'; // If we store our redux reducers using redux persist, It will not clear when you close your app. You have that old data when you open your app again
import Constants from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './authReducers';

const config = {
  key: Constants.asyncStorageKey,
  storage: AsyncStorage,
  blacklist: [],
};

const appReducer = persistCombineReducers(config, {
  auth: authReducer,
}); //this {} contains all reducers like {news:newsReducer}

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
