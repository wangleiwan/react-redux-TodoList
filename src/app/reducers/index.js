import { combineReducers } from 'redux';
import dashboard from './dashboard';
import addToDo from './addToDo';

const rootReducer = combineReducers({
  dashboard, addToDo,
});

export default rootReducer;
