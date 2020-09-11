import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/config/store';

import Router from './src/config/router';

const store = configureStore();

//part for tracking-inspecting all http requests
const XHR = GLOBAL.originalXMLHttpRequest ?  
    GLOBAL.originalXMLHttpRequest :           
    GLOBAL.XMLHttpRequest;               
XMLHttpRequest = XHR;

export default class App extends React.Component {
  render() {
    /* to disable yellow warnings */
    console.disableYellowBox = true;
    // LogBox.ignoreAllLogs(value);
    return (
      <Provider store={store}>
      <Router />
     </Provider>
    );
  }
}
