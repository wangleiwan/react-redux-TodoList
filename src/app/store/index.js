import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../components/DevTools';

const enhancer = compose(
  DevTools.instrument(),
);

export default function configureStore(initialState) {
  const middleware = [thunk/* , syncHistory(hashHistory) */];
  const store = createStore(rootReducer, initialState, enhancer, applyMiddleware(...middleware));

  return store;
}
