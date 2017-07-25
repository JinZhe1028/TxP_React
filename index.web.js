import 'babel-polyfill';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

/* eslint-disable import/no-unresolved, import/extensions */
// Load the manifest.json file and the .htaccess file

import ReactNative, { AppRegistry } from 'react-native';
import React from 'react';
import App from './src/web/app.web';

AppRegistry.registerComponent('VxP', () => App);

ReactNative.render(<App />, document.getElementById('main'));
