import React, {useEffect} from 'react';
import RootNavigation from './src/navigations';
import {Provider} from 'react-redux';
import reduxStore from './src/redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import EStyleSheet from 'react-native-extended-stylesheet';

export const reduxPersistStore = persistStore(reduxStore);

const App = () => {
  useEffect(() => {
    EStyleSheet.build();
  }, []);
  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={reduxPersistStore}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
