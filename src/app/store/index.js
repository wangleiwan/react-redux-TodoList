import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../components/DevTools';

const middleware = [thunk/* , syncHistory(hashHistory) */];
const enhancers = compose(
  applyMiddleware(...middleware),
  DevTools.instrument(),
  // window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancers);

  return store;
}
