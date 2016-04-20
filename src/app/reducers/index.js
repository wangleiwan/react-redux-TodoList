import { combineReducers } from 'redux';
import dashboard from './dashboard';
import ToDos from './ToDos';

const rootReducer = combineReducers({
  dashboard, ToDos,
});

export default rootReducer;
