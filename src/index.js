import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, Route, hashHistory } from 'react-router';
import 'expose?$!expose?jQuery!jquery';
import './assets/css/todo.css';
import configureStore from './app/store';
import './vendors/css/bootstrap.min.css';
// import './vendors/js/bootstrap.min.js';

import DevTools from './app/components/DevTools';
import AppContainer from './app/containers/AppContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      { process.env.NODE_ENV === 'development' ? <DevTools /> : null }
      <AppContainer />
    </div>
  </Provider>,
  document.getElementById('root')
);
