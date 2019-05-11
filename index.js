/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React from 'react';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './src/configs/configure-store';
import AppNavigation from './src/AppNavigation';

const RNRedux = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
