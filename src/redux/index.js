import {legacy_createStore, compose, applyMiddleware} from 'redux'; // compose is used to add multiple middleware
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import promiseMiddleware from './middleware/AppCalls';

let middleware = [thunk, promiseMiddleware];

const reduxStore = legacy_createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);

export default reduxStore;
