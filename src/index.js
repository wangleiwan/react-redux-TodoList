import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, Route, hashHistory } from 'react-router';
import './assets/css/todo.css';
import './assets/css/bootstrap.css';
import configureStore from './app/store';

import DevTools from './app/components/DevTools';
import AppContainer from './app/containers/AppContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import localforage from 'localforage';
injectTapEventPlugin();

localforage.config({
  name: 'To Do List',
});

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
