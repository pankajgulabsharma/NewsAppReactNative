import {
  UPDATE_ONBOARDING_STATUS,
  UPDATE_USER_LOGIN,
  UPDATE_USER_ACCESS_TOKEN,
} from '../constants';

const initialState = {
  onboardingStatus: false,
  user: {},
  isLoggedIn: false,
  accessToken: '',
};

const authReducer = (state = initialState, action) => {
  const {type, status, user, isLoggedIn, accessToken} = action;
  switch (type) {
    case UPDATE_ONBOARDING_STATUS:
      return {...state, onboardingStatus: status};
    case UPDATE_USER_LOGIN:
      return {...state, user, isLoggedIn}; // it means {...state, user:user, isLoggedIn:isLoggedIn};
    case UPDATE_USER_ACCESS_TOKEN:
      return {...state, accessToken};
    default:
      return state;
  }
};

export default authReducer;
