import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, Route, hashHistory } from 'react-router';

import configureStore from './app/store';

import DevTools from './app/components/DevTools';
import AppContainer from './app/containers/AppContainer';

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
